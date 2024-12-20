import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authToken } from "./constants/cookies";
import { paths } from "./router/paths";

// routes that require authentication ----------------------------------------------------------------------
const protectedRoutes = ["/resumes/"];
// routes that only for unauthenticated ----------------------------------------------------------------------
const guestRoutes = ["/auth/login", "/auth/register"];

// ----------------------------------------------------------------------

export function middleware(request: NextRequest) {
  const token = request.cookies.get(authToken)?.value;
  console.log("token:", token);

  const isGuestPath = guestRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isGuestPath && token) {
    return NextResponse.redirect(new URL(paths.resumes.root, request.url));
  }

  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    const url = new URL("/auth/login", request.url);
    url.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// ----------------------------------------------------------------------

export const config = {
  matcher: [
    // Protected routes ----------------------------------------------------------------------
    "/resumes/:path*",
    // Guest routes ----------------------------------------------------------------------
    "/auth/login",
    "/auth/register",
  ],
};
