import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Paths that do NOT require authentication
  const publicPaths = [
    "/",                // homepage (with email form)
    "/api/notify",      // email API route
    "/favicon.ico"      // optional, prevent redirect for favicon
  ];

  // Skip auth for public paths
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Redirect to login if token is missing for all other paths
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
