"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productsData } from "../data/featuredProduct";
import Plans from "./Plans";
import { addProteinToCart } from "../Slices/protein.slice";
import Link from "next/link";
 
function Product() {

  const dispatch = useDispatch(); 

  const handleAddToCart = (product) => { 
    dispatch(addProteinToCart(product));

    
};


 

  const productsRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
 const proteinCartItems = useSelector((state) => state.proteinCart.proteinItems);

  console.log(proteinCartItems);
  return (
    <>
      <div className="flex my-10 justify-center items-center font-serif bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-center">
        <h1 className="text-4xl py-6 text-yellow-500 font-bold">
          FEATURED PRODUCTS
        </h1>
      </div>

      {/* Product Items */}
      <h1 className="relative text-2xl font-serif max-w-[70%] mx-auto text-blue-900 font-bold">
        The Best Whey Protein to Buy
      </h1>

      {/* Scrollable Product List */}
      <div className="relative flex overflow-hidden max-w-[90%] md:max-w-[70%] mx-auto gap-5 my-5">
        {/* Left Arrow */}
        <button
          onClick={() => scroll(productsRef, "left")}
          className="absolute left-0 top-[50%] -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-300 z-10"
          aria-label="Scroll Left"
        >
          ←
        </button>

        {/* Scrollable Container */}
        <div
          ref={productsRef}
          className="flex overflow-x-scroll gap-5 hide-scrollbar scroll-smooth"
        >
          {productsData.map((product) => (
            <div
              key={product.id}
              className="flex flex-col border p-4 rounded-md shadow-md hover:shadow-lg group transition-shadow duration-300 bg-white"
            >
              {/* Product Image */}
              <div className="w-full flex justify-center hover:scale-105 transition-transform duration-300 mb-3">
                <Image
                  src={product.image}
                  alt={product.title}
                  height={300}
                  width={300}
                  className="min-w-[250px] h-[250px] md:min-w-[200px] md:h-[200px]"
                />
              </div>

              {/* Product Content */}
              <div className="flex flex-col w-full">
                {/* Product Title */}
                <h1 className="font-bold text-lg text-gray-800">
                  {product.title}
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm my-2">
                  {product.description}
                </p>

                {/* Price & Rating */}
                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold text-xl text-gray-800">
                    ${product.price}{" "}
                    <span className="text-xs text-red-500">
                      {product.discount}
                    </span>
                  </p>
                  <p className="text-yellow-500 text-lg">{product.rating}</p>
                </div>

                {/* Add to Cart Button */}
                <p 
                onClick={()=>handleAddToCart(product)}
                
                className="text-blue-900 transition-all duration-500 bg-yellow-500 text-center mt-7 py-2 rounded-xl hover:bg-blue-500 hover:text-white cursor-pointer text-lg">
                  Add to cart
                </p>

 



              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll(productsRef, "right")}
          className="absolute right-0 top-[50%] -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-300 z-10"
          aria-label="Scroll Right"
        >
          →
        </button>
      </div>




      <Plans/>
    </>
  );
}

export default Product;
