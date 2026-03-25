import { createBrowserClient } from "@supabase/ssr";

/**
 * Create a Supabase browser client using `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from the environment.
 *
 * @returns A Supabase browser client created with the configured URL and anon key.
 * @throws Error if either `NEXT_PUBLIC_SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_ANON_KEY` is missing or empty.
 */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  if (!url || !anonKey) {
    throw new Error("Supabase URL and anon key must be provided");
  }
  return createBrowserClient(url, anonKey);
}
