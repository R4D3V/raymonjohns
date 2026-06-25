/**
 * lib/db/supabase.ts
 *
 * Re-exports the canonical Supabase clients from utils/supabase/.
 * All DB query functions in lib/db/queries.ts import from here —
 * so this is the only place that needs to change if the client setup ever evolves.
 */

import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

export { createClient as createServerClient } from "@/utils/supabase/server";
export { createClient as createBrowserClient } from "@/utils/supabase/client";

/**
 * Admin client that uses the SERVICE ROLE KEY — bypasses RLS entirely.
 * Use this for all write operations (insert / update / delete) in server actions.
 * NEVER import or call this in client components or browser code.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url) throw new Error("NEXT_PUBLIC_SUPABASE_URL is not set.");
  if (!key || key === "your-service-role-key-here") {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is not set. " +
      "Go to Supabase dashboard → Settings → API → service_role (secret) " +
      "and add it to your .env.local file."
    );
  }

  return createClient<Database>(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
