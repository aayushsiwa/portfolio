import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

/**
 * Creates a Supabase server client for the incoming request, enforces admin-route access by redirecting unauthenticated users to `/login`, and returns a prepared `NextResponse`.
 *
 * Initializes a Supabase SSR client wired to the request/response cookies, refreshes the session via `supabase.auth.getUser()`, and uses the session presence to allow or redirect requests for `/admin` paths.
 *
 * @param request - The incoming Next.js request to evaluate and attach to the created response
 * @returns A `NextResponse` associated with the incoming request; if the request targets an `/admin` route and no authenticated user exists, a redirect response to `/login`
 */
export async function proxy(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  if (!url || !anonKey) {
    throw new Error("Supabase URL and anon key must be provided");
  }

  const response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (cookiesToSet) => {
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  // 🔥 This refreshes session if needed
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");

  if (isAdminRoute && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
