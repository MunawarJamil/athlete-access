'use client';

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

function Product() {
  // Fetch products from the Redux store
  const products = useSelector((state) => state.cart.products);
// console.log(products);

  return (
   
   <div className="flex  my-10 justify-center items-center  font-serif bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-center  ">
     
      <h1 className="text-4xl py-10  text-yellow-500  font-bold  ">FEATURED PRODUCT</h1>

       
      
    </div>
  );
}

export default Product;

 