import { createBrowserClient } from "@supabase/ssr";

/**
 * Create a Supabase browser client using NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.
 *
 * @returns A Supabase browser client configured with the public URL and anon key.
 * @throws Error if `NEXT_PUBLIC_SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_ANON_KEY` are missing or empty.
 */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  if (!url || !anonKey) {
    throw new Error("Supabase URL and anon key must be provided");
  }
  return createBrowserClient(url, anonKey);
}

export const supabaseBrowserClient = createClient();
