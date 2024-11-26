"use client";

import Footer from "@/app/components/Footer"; 
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Slices/product.slice";
import Link from "next/link";
export default function ProductDetails({ data }) { 
  const dispatch = useDispatch();
 const handleAddToCart=()=>{
console.log("product added ");
dispatch(addItemToCart(data))

 }
  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="px-5 py-24 mx-auto">
          <div className="container mx-auto flex flex-wrap">
            <img src={data.image} alt={data.name} width="400px" />
            
            <div className="w-full lg:w-1/2 md:pl-10 md:py-6 mt-6 md:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {data.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {data.name}
              </h1>

              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  {/* Repeat for other SVG stars */}
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  {/* Repeat for other social media icons */}
                </span>
              </div>

              <p className="leading-relaxed">
                {data.discription}
              </p>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {data.flavors}
                </h2>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option> 
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {data.price}
                </span>

                <button className="flex ml-auto text-white bg-blue-700 border-0 py-2 px-7 focus:outline-none hover:bg-green-600 rounded">
                  Buy Now
                </button>

                <button 
                  className="flex ml-5 text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                  onClick={handleAddToCart}
                >
                    <Link href="/cart">
                    Add To Cart
                  </Link>   
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-1">
        <Footer />
      </section>
    </>
  );
}
