import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

/**
 * Create a Supabase server-side client configured for Next.js server rendering with Next.js cookie integration.
 *
 * @returns The Supabase server client configured with the project URL, anon key, and Next.js cookie adapters.
 * @throws Error if `NEXT_PUBLIC_SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_ANON_KEY` is not set.
 */
export async function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const cookieStore = await cookies();
  if (!url || !anonKey) {
    throw new Error("Supabase URL and anon key must be provided");
  }

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Ignore: cookie mutation not allowed in this context
          // (Server Component, prerender, etc.)
        }
      },
    },
  });
}
