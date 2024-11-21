import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Define protected routes
const protectedRoutes = ["/dashboard", "/profile", "/api/protected", "/home"];

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Check if the request is for a protected route
  if (protectedRoutes.includes(url.pathname)) {
    // Get the token from cookies
    const token = req.cookies.get("token")?.value;

    if (!token) {
      // Redirect to login if no token is found
      console.log("No token found, redirecting to login.");
      url.pathname = "/auth/login";
      return NextResponse.redirect(url);
    }

    console.log("Token found:", token);
    console.log("secret key:", process.env.SECRET_KEY);

    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      console.log("Token decoded successfully:", decoded);

      // Allow the request to proceed
      return NextResponse.next();
    } catch (error) {
      console.error("Token verification failed:", error);

      // Redirect to login if token is invalid
      url.pathname = "/auth/login";
      return NextResponse.redirect(url);
    }
  }

  // Allow all non-protected routes to proceed
  return NextResponse.next();
}
