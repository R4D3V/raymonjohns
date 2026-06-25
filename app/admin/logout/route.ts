import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

/**
 * GET /admin/logout
 * Signs out the current user and redirects to the login page.
 * Used as a fallback for environments where server actions aren't available.
 */
export async function GET() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return NextResponse.redirect(new URL("/admin/login", process.env.NEXT_PUBLIC_SUPABASE_URL));
}
