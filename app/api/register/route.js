import db_connection from "@/server/config/db.config";
import UserModel from "@/server/models/users.model";
import { NextResponse } from "next/server";

export async function POST(req) {
    await db_connection(); // Ensure database connection
  
    try {
      const { fullname, email, password } = await req.json();
  
      // Check if user email correct or not 
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return NextResponse.json(
          { message: 'User already exists with this email' },
          { status: 400 }
        );
      }
  
      // Create a new user
      const user = await UserModel.create({ fullname, email, password });
  
      // Respond with successhgfrhgfgfgf
      return NextResponse.json(
        {
          message: 'User registered successfully',
          user: {
            fullname: user.fullname,
            email: user.email,
          },
        },
        { status: 201 }
      );
    } catch (error) {
      console.error('Registration error:', error); // Log the error for debugging
      return NextResponse.json(
        { message: 'An error occurred during registration' },
        { status: 500 }
      );
    }
  }


  