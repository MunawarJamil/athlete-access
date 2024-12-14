"use client"
import React from "react";
import { useState } from "react";

function Profile() {
  const [isMarketingEmail, setMarketingEmail] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [dob, setDob] = useState("");

console.log(fullname);


  const onChangeProfile = () => {
    setEditProfile(true);
  };

  const onSubmitForm = (e) => {
    e.preventDefault(); // Prevent default form submission
    setEditProfile(false); // Close the edit form after submission
  };

 
  return (<>
 

 {editProfile ? ( 
  <div className="  py-32   bg-blue-950 h-[93.3vh]">
 <form
  method="POST" // Correct method attribute
  onSubmit={ onSubmitForm }
  className="bg-gradient-to-r flex flex-col mt-10 from-blue-900 via-indigo-900 to-purple-900 text-white max-w-lg mx-auto rounded-lg shadow-lg p-8 space-y-6"
>
  <h1 className="text-2xl font-bold text-center">User Information</h1>
  
  <div className="flex flex-col gap-2">
    <label htmlFor="fullname" className="font-medium">Full Name</label>
    <input 
      type="text" 
      id="fullname" 
      onChange={(e)=>{  setFullname(e.target.value)}}
      value={fullname}
      name="fullname" 
      placeholder="Enter your full name" 
      required 
      className="px-4 bg-slate-300 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="email" className="font-medium">Email</label>
    <input 
      type="email" 
      onChange={(e)=>{  setEmail(e.target.value)}}
      value={email}
      id="email" 
      name="email" 
      placeholder="Enter your email" 
      required 
      className="px-4 bg-slate-300 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="birthday" className="font-medium">Birthday</label>
    <input 
   
      type="date" 
      id="birthday" 
      onChange={(e)=>{  setDob(e.target.value)}}
      value={dob}
      name="birthday" 
      required 
      className="px-4 py-2 bg-slate-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="gender" className="font-medium">Gender</label>
    <select 
      id="gender" 
      onChange={(e)=>{  setGender(e.target.value)}}
      value={gender}
      name="gender" 
      required 
      className="px-4 py-2 bg-slate-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-800"
    >
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>

  <button 
    type="submit" 
    
    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg shadow-lg transition-all duration-300"
  >
    Submit
  </button>
</form>                                 
</div>
    ):
    
    <main className="flex w-full font-serif bg-gradient-to-b from-blue-200 to-indigo-300 min-h-screen">
    {/* Sidebar */}
    <aside className="sidebar hidden lg:flex lg:flex-col bg-slate-700 text-white h-[93vh] lg:w-[20%] shadow-lg">
      <div className="flex border-b-[1px] border-gray-500 p-8 flex-col gap-4">
        <p className="cursor-pointer hover:text-cyan-400 transition-all duration-300">Hello, {fullname}</p>
        <h2 className="cursor-pointer text-lg font-semibold hover:text-cyan-400 transition-all duration-300">Manage My Account</h2>
        <p className="cursor-pointer hover:text-cyan-400 transition-all duration-300">My Profile</p>
        <p className="cursor-pointer hover:text-cyan-400 transition-all duration-300">My Payment Options</p>
      </div>
    </aside>
  
    {/* Main Section */}
    <section className="flex flex-col gap-8 p-10 w-full bg-white rounded-t-lg shadow-lg lg:rounded-none lg:shadow-none lg:w-[80%]">
      {/* Profile Section */}
      <div className="profile flex flex-col lg:flex-row gap-10 items-center lg:items-start w-[90%] mx-auto">
        {/* Avatar */}
        <div className="img w-48 h-48">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png"
            alt="Default Avatar"
            className="rounded-full shadow-lg border-4 border-cyan-500"
          />
        </div>
  
        {/* Profile Details */}
        <div className="details flex flex-col lg:flex-row gap-10 w-full">
          {/* Left Section */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <p className="text-lg text-cyan-500 font-semibold">Full Name</p>
              <p className="text-gray-700">{fullname}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg text-cyan-500 font-semibold">Birthday</p>
              <p className="text-gray-700">{dob}</p>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <p className="text-lg text-cyan-500 font-semibold">Email</p>
              <p className="text-gray-700">{email}</p>
            </div>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={isMarketingEmail}
                onChange={() => setMarketingEmail(!isMarketingEmail)}
                className="accent-cyan-500"
              />
              <span className="text-gray-700">Receive marketing emails</span>
            </label>
            <div className="flex flex-col">
              <p className="text-lg text-cyan-500 font-semibold">Gender</p>
              <p className="text-gray-700">{gender}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg text-cyan-500 font-semibold">Mobile</p>
              <button className="text-cyan-500 hover:underline">Add</button>
            </div>
          </div>
        </div>
      </div>
  
      {/* Buttons */}
      <div className="buttons flex flex-col lg:flex-row gap-4 justify-center">
        <button onClick={()=>onChangeProfile()} className="bg-cyan-600 py-3 px-8 rounded-lg text-white shadow-md hover:bg-cyan-700 transition-all duration-300">
          EDIT PROFILE
        </button>
        <button className="bg-cyan-600 py-3 px-8 rounded-lg text-white shadow-md hover:bg-cyan-700 transition-all duration-300">
          CHANGE PASSWORD
        </button>
      </div>
    </section>
  </main>
    
    
    
    
    
    
    
    
    }
    </>
  );
}

export default Profile  ;


 
 