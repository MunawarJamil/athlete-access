import React from "react";
import Image from "next/image";
 
import { Carousel, CarouselContent,
  CarouselItem, } from "../../components/ui/carousel";



 import Product from "./Product";
function Hero() {
  return (
    <> 
{/* bg-[#00454A]  */}
<div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 w-full   text-white">
<Carousel>
<CarouselContent>
  <CarouselItem>
    <div className="flex flex-col lg:flex-row       ">
      <div className="">
      <Image
        src="/whey2.jpg"
        width={1000}
        height={0}
        alt="   whey protein"
        className="h-[20rem] md:h-[25rem] lg:h-[40rem] md:rounded-br-full "
      />
      </div>
      <div className="flex text-wrap my-4 flex-col justify-center items-center mx-auto gap-5 font-serif">
        <h1 className=" text-4xl lg:text-6xl  font-bold  text-[#D4A10F] ">FREE SHAKER</h1>
        <h2 className="text-lg  lg:text-3xl font-bold  ">
          WITH ANY RYSE PURCHASE
        </h2>
        <button className="text-2xl border border-yellow-500 py-1 px-3 rounded-sm   ">SHOP NOW</button>
        <p className=" text-sm lg:text-xl    ">
          AUTOMATICALLY ADDED TO YOUR SHIPMENT{" "}
        </p>
        <div className="bg-yellow-500 w-full h-1 " />
      </div>        
              </div>
            </CarouselItem>

            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>


      <section className=" container mx-auto mt-10 flex flex-col lg:flex-row">
       
        <div className="flex flex-col   gap-3 font-serif  p-10 text- ">
            <h1 className="text-5xl font-bold text-blue-950 "  >Who we are</h1>
            <p className="text-2xl pl-2 text-yellow-500 ">Welcome to power-acces.com</p>
<p className="text-blue-950 p-3">
            At PowerAccess, we are more than just a fitness platform—we are your partner in achieving the ultimate version of yourself.
            </p>

            <p className=" pl-3" >Our mission is simple yet powerful: to equip you with the tools, resources, and motivation to conquer every health and wellness goal you envision. Whether you're just starting or looking to elevate your routine, we’ve got you covered every step of the way.</p>
            <ul className=" list-disc ml-5 p-2  pb-3 ">
            <li> <span  className="text-blue-950 font-bold ">Transform your body</span>  with expertly crafted programs, cutting-edge supplements, and essential gear.</li>
            <li> <span className="text-blue-950 font-bold ">Sharpen your mind</span> with empowering articles and strategies for a resilient mindset.</li>
            <li className="mt-2"> <span className="text-blue-950 font-bold ">Elevate your life</span> with a supportive community and tools that inspire progress and purpose</li>
            </ul>

            
            <h3 className="text-2xl text-yellow-500">It’s time to build.  It’s time to thrive. It’s time <p>for PowerAccess.</p> </h3>
            <button className="text-2xl border px-4 py-1    text-white rounded-lg bg-blue-950">Connect With Us</button>
        </div> 

        <Image 
  src="/whowe.png" 
  alt="Who We Are" 
  className="object-contain    px-10  " 
  width={900} 
  height={ 800} 
   
/>

      </section>

{/* Featured Products */}

<Product/>
                      
 </>
  );
}

export default Hero;
