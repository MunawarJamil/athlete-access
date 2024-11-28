"use client"
import React from "react";
import { useState } from "react";

function Profile() {
  const [isMarketingEmail, setMarketingEmail] = useState(false);

  const user = {
    fullName: "Munawar Minhas",
    birthday: "1998-11-23",
    email: "munawar.minhas777@gmail.com",
    gender: "male",
  };

  return (
    <main className="flex w-full font-serif bg-blue-200">
      <aside className="sidebar hidden lg:flex lg:flex-col bg-slate-400 h-[93vh] lg:w-[20%]">
        <div className="flex border-b-[1px] p-10 text-white flex-col gap-3">
          <p className="cursor-pointer">Hello, {user.fullName}</p>
          <h2 className="cursor-pointer">Manage My Account</h2>
          <p className="cursor-pointer">My Profile</p>
          <p className="cursor-pointer">My Payment Options</p>
        </div>
      </aside>

      <section className="flex flex-col gap-6 p-10 w-full lg:w-full bg-slate-200">
        <div className="profile flex flex-col gap-6 lg:flex-row lg:gap-20 w-[80%] lg:w-full mx-auto items-center lg:items-start">
          <div className="img w-48 h-48">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png"
              alt="Default Avatar"
            />
          </div>

          <div className="top flex flex-col lg:flex-row gap-5 lg:gap-32">
            {/* name section */}
            <div>
            <div className="flex gap-5 lg:gap-1 items-center lg:items-start lg:flex-col">
              <p className="text-xl text-cyan-500 ">Full Name</p>
              <p>{user.fullName}</p>
            </div>

            <div className="my-5  first-line: lg:my-0 flex gap-5 lg:gap-1 items-center lg:items-start lg:flex-col">
              <p className="text-xl lg:mt-10 text-cyan-500">Birthday</p>
              <p>{user.birthday}</p>
            </div>
            </div>

{/* email section */}
            <div>
            <div className="email">
              <div className="flex gap-5 lg:gap-1 items-center lg:items-start lg:flex-col">
                <p className="text-xl text-cyan-500">Email</p>
                <p>{user.email}</p>
              </div>

              <label className="flex items-center my-10 lg:my-5">
                <input
                  type="checkbox"
                  checked={isMarketingEmail}
                  onChange={() => setMarketingEmail(!isMarketingEmail)}
                />
                <span className="ml-3">Receive marketing emails</span>
              </label>

              <div className="flex gap-5 lg:gap-1 items-center lg:items-start lg:flex-col">
                <p className="text-xl lg:mt-5 text-cyan-500">Gender</p>
                <p>{user.gender}</p>
              </div>
            </div>

            <div className="mobile">
              <p className="text-xl  mt-10 text-cyan-500">
                Mobile |
                <span className="text-cyan-500 ml-3">
                  <button>Add</button>
                </span>
              </p>
            </div>


            </div>



          </div>
        </div>

        <div className="buttons flex flex-col lg:flex-row gap-2 my-5 lg:my-20">
          <button className="bg-cyan-600 py-3 px-9 rounded-lg text-white">EDIT PROFILE</button>
          <button className="bg-cyan-600 py-3 px-5 rounded-lg text-white">CHANGE PASSWORD</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
