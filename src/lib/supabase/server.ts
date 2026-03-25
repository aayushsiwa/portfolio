import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

/**
 * Create a Supabase server client configured for Next.js that integrates with the Next.js cookie store.
 *
 * @returns A Supabase server client instance configured to read and mutate cookies via the Next.js cookie store.
 * @throws Error if the Supabase URL or anon key environment variables are not provided.
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
