import { NextResponse } from "next/server";
import UserModel from "@/server/models/users.model";
import db_connection from "@/server/config/db.config";
// import { serialize } from "cookie";

export async function POST(req) {
  await db_connection();
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2M4YTRiZDIyOTBiYWM4OThlYjYwNSIsImVtYWlsIjoibXVuYXdhcjc3N0BnbWF
  //pbC5jb20iLCJpYXQiOjE3MzIwMjA4MTUsImV4cCI6MTczMjAyNDQxNX0.CocVSTwEnqJFEyAwjPEkbVjSMLFZ1XGB9WOO9KUy5Kk
  try {
    const { email, password } = await req.json();

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: 'Email or password is incorrect' },
        { status: 400 }
      );
    }

    // Compare password
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: 'Email or password is incorrect' },
        { status: 400 }
      );
    }

    // Generate token
    const token = await user.generateToken();

//set token in cokies 
const response = NextResponse.json(
      {
        message: 'You are logged in successfully',
        
        user: {
          fullname: user.fullname,
          email: user.email,
        },
      },
      { status: 200 }
    );

response.cookies.set("token" ,  token , {httpOnly:true})
// response.headers.set(
//   "Set-Cookie",
//   serialize("token", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "strict",
//     path: "/",
//     maxAge: 60 * 60, // 1 hour
//   })
// );
return response;
 } catch (error) {
    console.error('Login error:', error); // Log the error for debugging
    return NextResponse.json(
      { message: 'An error occurred during login' },
      { status: 500 }
    );
  }
}


//get email and password from the req.json 
//check if email and password are correct 