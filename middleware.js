import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/dashboard",
   
    "/api/protected",
    "/home",
    "/cart",
  ],



  // "/profile",
};

export function middleware(req) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("token")?.value;

  if (!token) {
    console.log("No token found, redirecting to login.");
    url.pathname = "/auth"; // Redirect to login page
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Allow access if token exists
}
