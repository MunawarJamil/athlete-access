"use client";
import { useState,   } from "react";
import { CircleArrowLeft } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import Link from "next/link";
import { X } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { AlignLeft } from 'lucide-react';
import { useSelector } from "react-redux";
function Navbar() {
  const [selectedItem, setSelectedItem] = useState(""); // Track the selected item
const items = useSelector((item=>item.cart.items))
  // Function to handle item clicks
  const itemClicked = (item) => {
    setSelectedItem(selectedItem === item ? "" : item);
     // Toggle content for the selected item
     setIsToggle(false)
  };
const [isToggele, setIsToggle ] = useState(false);

function goBack(){
  setSelectedItem("")
  setIsToggle(true)
}


function toggleClicked(){
  setIsToggle(!isToggele)
  setSelectedItem("")
}
  return (
    <>
      <nav className=" hidden lg:flex justify-between py-5 px-10   bg-black text-white">
        <div className="logo ">Power-Access</div>
        <div className="menu-items flex gap-6">
          <ul className="hidden lg:flex gap-6">
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => itemClicked("SHOP")}
            >
              SHOP
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => itemClicked("WORKOUTS")}
            >
              WORKOUTS
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => itemClicked("ARTICLES")}
            >
              ARTICLES
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => itemClicked("COMMUNITY")}
            >
              COMMUNITY
            </li>
          </ul>
        </div>
        <div className="icons flex gap-5">
          <CircleUserRound/>
          <ShoppingBag/> {items.length}

        </div>
      </nav>

      {/* Conditionally render content based on the selected item */}
      {selectedItem === "SHOP" && (
        <div className="hidden lg:flex gap-10 justify-evenly p-5 font-serif">
          <div>
            <h1 className="text-lg font-semibold">PERFORMANCE & RECOVERY</h1>
            <ul className="flex flex-col my-4 gap-3">
              <li><Link href="/home">Whey Protein</Link></li>
              <li><Link href="/home">Whey Protein Isolate</Link></li>
              <li><Link href="/home">Mass Weight Gainers</Link></li>
              <li><Link href="/home">Casein Protein</Link></li>
              <li><Link href="/home">Protein Bars & Snacks</Link></li>
              <li><Link href="/home">Pre-Workout</Link></li>
            </ul>
          </div>
          {/* Repeat divs with different headings and items as needed */}
          <div>
            <h1 className="text-lg font-semibold">VITAMINS & SUPPLEMENTS</h1>
            <ul className="flex flex-col my-4 gap-3">
              <li><Link href="/home">Whey Protein</Link></li>
              <li><Link href="/home">Whey Protein Isolate</Link></li>
              <li><Link href="/home">Mass Weight Gainers</Link></li>
              <li><Link href="/home">Casein Protein</Link></li>
              <li><Link href="/home">Protein Bars & Snacks</Link></li>
              <li><Link href="/home">Pre-Workout</Link></li>
            </ul>
          </div>
          {/* Repeat divs with different headings and items as needed */}
          <div>
            <h1 className="text-lg font-semibold">HEALTHY WEIGHT</h1>
            <ul className="flex flex-col my-4 gap-3">
              <li><Link href="/home">Whey Protein</Link></li>
              <li><Link href="/home">Whey Protein Isolate</Link></li>
              <li><Link href="/home">Mass Weight Gainers</Link></li>
              <li><Link href="/home">Casein Protein</Link></li>
              <li><Link href="/home">Protein Bars & Snacks</Link></li>
              <li><Link href="/home">Pre-Workout</Link></li>
            </ul>
          </div>
          {/* Repeat divs with different headings and items as needed */}
          <div>
            <h1 className="text-lg font-semibold">EQUIPMENT & ACCESSORIES</h1>
            <ul className="flex flex-col my-4 gap-3">
              <li><Link href="/home">Whey Protein</Link></li>
              <li><Link href="/home">Whey Protein Isolate</Link></li>
              <li><Link href="/home">Mass Weight Gainers</Link></li>
              <li><Link href="/home">Casein Protein</Link></li>
              <li><Link href="/home">Protein Bars & Snacks</Link></li>
              <li><Link href="/home">Pre-Workout</Link></li>
            </ul>
          </div>
          {/* Repeat divs with different headings and items as needed */}
          <div>
            <h1 className="text-lg font-semibold">TRENDING</h1>
            <ul className="flex flex-col my-4 gap-3">
              <li><Link href="/home">Whey Protein</Link></li>
              <li><Link href="/home">Whey Protein Isolate</Link></li>
              <li><Link href="/home">Mass Weight Gainers</Link></li>
              <li><Link href="/home">Casein Protein</Link></li>
              <li><Link href="/home">Protein Bars & Snacks</Link></li>
              <li><Link href="/home">Pre-Workout</Link></li>
            </ul>
          </div>
          {/* Repeat divs with different headings and items as needed */}
          <div>
            <h1 className="text-lg font-semibold">PROTEIN</h1>
            <ul className="flex flex-col my-4 gap-3">
              <li><Link href="/home">Whey Protein</Link></li>
              <li><Link href="/home">Whey Protein Isolate</Link></li>
              <li><Link href="/home">Mass Weight Gainers</Link></li>
              <li><Link href="/home">Casein Protein</Link></li>
              <li><Link href="/home">Protein Bars & Snacks</Link></li>
              <li><Link href="/home">Pre-Workout</Link></li>
            </ul>
          </div>
          {/* Repeat divs with different headings and items as needed */}
          
        </div>
      )}

      {selectedItem === "WORKOUTS" && (
        <div className="flex gap-10 justify-evenly py-5 font-serif">
          <div>
            <h1 className="text-lg font-semibold">WORKOUT EQUIPMENT</h1>
            <ul className="flex flex-col my-4 gap-3">
              <li><Link href="/home">Dumbbells</Link></li>
              <li><Link href="/home">Kettlebells</Link></li>
              <li><Link href="/home">Resistance Bands</Link></li>
              <li><Link href="/home">Yoga Mats</Link></li>
              <li><Link href="/home">Foam Rollers</Link></li>
            </ul>
          </div>
        </div>
      )}

      {/* Add additional content for other menu items similarly */}


      {selectedItem === "ARTICLES" && (
        <div className="flex gap-10 justify-evenly py-5 font-serif">
          <div>
            <h1 className="text-lg font-semibold">WORKOUT EQUIPMENT</h1>
            <ul className="flex flex-col my-4 gap-3">
              <li><Link href="/home">Dumbbells</Link></li>
              <li><Link href="/home">Kettlebells</Link></li>
              <li><Link href="/home">Resistance Bands</Link></li>
              <li><Link href="/home">Yoga Mats</Link></li>
              <li><Link href="/home">Foam Rollers</Link></li>
            </ul>
          </div>
        </div>
      )}
 {selectedItem === "COMMUNITY" && (
        <div className="flex gap-10 justify-evenly py-5 font-serif">
          <div>
            <h1 className="text-lg font-semibold">WORKOUT EQUIPMENT</h1>
            <ul className="flex flex-col my-4 gap-3">
              <li><Link href="/home">Dumbbells</Link></li>
              <li><Link href="/home">Kettlebells</Link></li>
              <li><Link href="/home">Resistance Bands</Link></li>
              <li><Link href="/home">Yoga Mats</Link></li>
              <li><Link href="/home">Foam Rollers</Link></li>
            </ul>
          </div>
        </div>
      )}




{/* For screens md and less than md  */}

  
<nav className="   flex justify-between   py-5 px-10 bg-black text-white lg:hidden " >
   
   <div onClick={toggleClicked}>
   {isToggele? <X /> : <AlignLeft className="text-white"/> }
   </div>
   <div>

   <div className="logo ">Power-Access</div>
   </div>

   <div className="icons flex gap-5">
          <CircleUserRound/>
          <ShoppingBag/>

        </div>
   </nav>
{
  isToggele && (
    <div className="bg-slate-800  h-[90vh] font-serif"> 
      <ul className="lg:hidden  flex flex-col gap-5 py-5  text-white ">
        <li onClick={() => itemClicked("SHOP")}  className=" hover:bg-slate-400 p-5 cursor-pointer  ">SHOPP</li>
        <li className=" hover:bg-slate-400 p-5 cursor-pointer " >WORKOUT</li>
        <li className=" hover:bg-slate-400 p-5 cursor-pointer " >ARTICLES</li>
        <li className=" hover:bg-slate-400 p-5 cursor-pointer " >COMMUNITY</li> 
      </ul>
    </div>
  )
}

{
  selectedItem ==='SHOP' && ( 
     <> 

        
    <div className=" lg:hidden  flex absolute top-6 bg-slate-800  my-10 h-[90vh] w-full    text-white flex-col gap-5   font-serif">
         
         
          <div className=" ">
         
            <h1 className="text-lg  p-5 font-semibold">PERFORMANCE & RECOVERY</h1>
            <ul className="flex  flex-col my-4 gap-3">
              <li className="p-5 text-lg hover:bg-slate-500" ><Link href="/home">Whey Protein</Link></li>
              <li  className="p-5 text-lg hover:bg-slate-500" ><Link href="/home">Whey Protein Isolate</Link></li>
              <li  className="p-5 text-lg hover:bg-slate-500" ><Link href="/home">Mass Weight Gainers</Link></li>
              <li  className="p-5 text-lg hover:bg-slate-500" ><Link href="/home">Casein Protein</Link></li>
              <li  className="p-5 text-lg hover:bg-slate-500" ><Link href="/home">Protein Bars & Snacks</Link></li>
              <li  className="p-5 text-lg hover:bg-slate-500" ><Link href="/home">Pre-Workout</Link></li>
            </ul>


            <button className="text-white bg-slate-700 w-full flex items-center px-5 py-3 mb-2 gap-1" onClick={()=>goBack()}>
       <CircleArrowLeft  /> <span className="text-lg " >Go Back </span> 
      </button>
          </div>
          
          
        </div>
        </>
  )
}



    </>
  );
}

export default Navbar;
