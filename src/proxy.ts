import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

/**
 * Enforces authentication for admin routes by refreshing the Supabase session and redirecting unauthenticated requests to /login.
 *
 * Creates a Supabase server client bound to the incoming request and outgoing response cookies, refreshes or obtains the current user, and either returns a response that continues request processing or a redirect to `/login` when an unauthenticated user attempts to access an `/admin` path.
 *
 * @returns A NextResponse that continues middleware processing, or a redirect response to `/login` for unauthenticated requests to `/admin`.
 */
export async function proxy(request: NextRequest) {
  const response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

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
