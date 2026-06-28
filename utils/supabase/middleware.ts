import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import type { Database } from "@/lib/db/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

/**
 * Creates a Supabase client scoped to a middleware request.
 * Propagates updated session cookies to both the request and response
 * so server components always see a fresh session.
 * Returns the response AND the authenticated user (null if not signed in).
 */
export const createClient = async (request: NextRequest) => {
  let supabaseResponse = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient<Database>(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(
        cookiesToSet: { name: string; value: string; options: Record<string, unknown> }[]
      ) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        );
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  // IMPORTANT: getUser() must be called to refresh the session token.
  // Do NOT replace this with getSession() — it won't work reliably server-side.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { supabaseResponse, user };
};
