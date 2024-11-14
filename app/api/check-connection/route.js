import db_connection from "@/server/config/db.config";
import { NextResponse } from 'next/server';

 

export async function GET() {
  try {
    // Ensure the database connection
    await db_connection();
    return NextResponse.json({ message: 'DB Connection Status Checked and connected successfully' });
  } catch (error) {
    console.error('Error in handler:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}


// export default async function handler(req, res) {
//     try {
//       // Ensure the database connection
//       await db_connection();
//       res.status(200).json({ message: 'DB Connection Status Checked' });
//     } catch (error) {
//       console.error('Error in handler:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   }


