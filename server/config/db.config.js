import mongoose from "mongoose";

const db_connection = async ()=>{
    // If MongoDB is already connected or connecting, we don't need to connect again
   if (mongoose.connection.readyState >= 1) return;
   try {

       await mongoose.connect(process.env.DB_CONNECTION_STRING)
     console.log("Database connect successfully");
    //  console.log(process.env.DB_CONNECTION_STRING);
     
     
   } catch (error) {
    console.log("Error while connecting database", error);
    
   }
}

export default db_connection;