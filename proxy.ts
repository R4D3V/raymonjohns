import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/proxy";

/**
 * Runs on every matched request.
 * - Refreshes the Supabase session cookie so Server Components see fresh auth.
 * - Protects all /admin/* routes: unauthenticated users are redirected to /admin/login.
 * - Redirects already-authenticated users away from /admin/login to /admin/products.
 * - Redirects bare /admin to /admin/products (or /admin/login if unauthenticated).
 */
export async function proxy(request: NextRequest) {
  const { supabaseResponse, user } = await createClient(request);
  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/admin/login";

  // Redirect bare /admin to /admin/products
  if (pathname === "/admin" || pathname === "/admin/") {
    if (!user) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    return NextResponse.redirect(new URL("/admin/products", request.url));
  }

  // Unauthenticated user trying to access admin — send to login
  if (isAdminRoute && !isLoginPage && !user) {
    const loginUrl = new URL("/admin/login", request.url);
    // Preserve destination so we can redirect back after sign-in
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Already signed in but visiting the login page — send to dashboard
  if (isLoginPage && user) {
    return NextResponse.redirect(new URL("/admin/products", request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static  (static assets)
     * - _next/image   (image optimisation)
     * - favicon.ico
     * - public files with an extension (e.g. images, fonts, etc.)
     */
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff2?)$).*)",
  ],
};
