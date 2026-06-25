import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/lib/db/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

/**
 * Browser-side Supabase client for use in Client Components.
 * Uses the publishable key — safe to expose in the browser.
 */
export const createClient = () =>
  createBrowserClient<Database>(supabaseUrl, supabaseKey);
