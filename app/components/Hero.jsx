import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
 import Product from "./Product";
function Hero() {
  return (
    <>
      <div className="bg-slate-950 w-full   text-white">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col lg:flex-row       ">
               <div className="">
                <Image
                  src="/whey2.jpg"
                  width={800}
                  height={0}
                  alt="   whey protein"
                  className="h-[20rem] md:h-[25rem] lg:h-[40rem] "
                />
                </div>
                <div className="flex text-wrap my-4 flex-col justify-center items-center mx-auto gap-5 font-serif">
                  <h1 className=" text-4xl lg:text-8xl font-bold  ">FREE SHAKER</h1>
                  <h2 className="text-xl  lg:text-4xl font-bold  ">
                    WITH ANY RYSE PURCHASE
                  </h2>
                  <button className="text-2xl border py-1 px-3 rounded-sm   ">SHOP NOW</button>
                  <p className=" text-lg lg:text-2xl    ">
                    AUTOMATICALLY ADDED TO YOUR SHIPMENT{" "}
                  </p>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>


      <section className="flex flex-col lg:flex-row">
       
        <div className="flex flex-col justify-center items-center gap-5 font-serif  p-10 text-center">
            <h1 className="text-6xl font-bold" >Who we are</h1>
            <p className="text-4xl">Welcome to power-acces.com</p>
            <p className="text-lg" >Our mission is to provide you with the tools and resources to build your body for whatever  health and wellness goal you set your sight on. From programs and articles to supplements and gear, every part of your routine starts here.</p>
            <p className="text-2xl" >Build your body.</p>
            <p className="text-2xl" >Build your mind.</p>
            <p className="text-2xl" >Build your life</p>
            <h3 className="text-3xl">Let's get to work.</h3>
            <button className="text-3xl border px-4 py-1 bg-slate-900 text-white rounded-lg">LEARN MORE</button>
        </div>
        <img src="/whowe.png" alt="" className="object-cover w-[800px]" />

      </section>

{/* Featured Products */}

<Product/>
                      
 </>
  );
}

export default Hero;
