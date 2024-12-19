import { verify } from "jsonwebtoken";

import { NextResponse } from "next/server";
import   UserModel from './../../../server/models/users.model'; 
import db_connection from './../../../server/config/db.config';
 

export async function GET(req){

    await db_connection();
    try {
       const token  = req.cookies.get("token")?.value;
        if(!token){
            return NextResponse.json(
                {message: "Authentication token not found "},

                {status:401}
            )
        }
// if token found verify it                                                                                                         
          
 

const decoded = verify(token, process.env.SECRET_KEY)
const userId = decoded.id;

// fetch user details from database 

const user = await UserModel.findById(userId, "fullname email dob")

if (!user) { 
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  }


return NextResponse.json(

    {
        message: "User Profile fetched successfully",

        user: {
            fullname: user.fullname,
            email: user.email,
            dob: user.dob || "N/A",  
          },
        },
        { status: 200 }
      );
    } catch (error) {
      console.error("Profile fetch error:", error);
      return NextResponse.json(
        { message: "An error occurred while fetching profile" },
        { status: 500 }
      );
    }
  }