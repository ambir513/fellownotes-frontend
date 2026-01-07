import { NextRequest, NextResponse } from "next/server";
import {
  DEFAULT_REDIRECT_URL,
  isAuthRoute,
  isProtectedRoute,
  isPublicRoute,
} from "./route";

export function proxy(req: NextRequest) {
  const isLoggedIn = !!req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;
  const isPublicPath = isPublicRoute.includes(pathname);
  const isProtectedPath = isProtectedRoute.includes(pathname);
  const isAuthPath = isAuthRoute.includes(pathname);

  if (isLoggedIn && pathname === "/") {
    return NextResponse.redirect(new URL(DEFAULT_REDIRECT_URL, req.url));
  }

  if (isLoggedIn && isAuthPath) {
    return NextResponse.redirect(new URL(DEFAULT_REDIRECT_URL, req.url));
  }

  if (!isLoggedIn && isProtectedPath) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
