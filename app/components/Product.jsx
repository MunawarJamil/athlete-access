'use client';

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

function Product() {
  // Fetch products from the Redux store
  const products = useSelector((state) => state.cart.products);
// console.log(products);

  return (
    <div className="flex flex-col my-16 font-serif bg-slate-200 text-center lg:gap-8">
      <h1 className="text-6xl font-bold mt-10">FEATURED PRODUCT</h1>

      <div className="flex flex-wrap md:justify-center gap-10 mt-10 md:gap-20">
        <div className="flex flex-wrap gap-10 justify-center mt-10">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="flex flex-col text-slate-600 max-w-[220px] p-3 hover:opacity-60 cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="min-h-[250px]"
                />
                <p className="text-slate-400"> {product.brand}</p>
                <p>{product.name}</p>
                <p className="text-blue-500">{product.flavors}</p>
                <p>{product.price}</p>
                <p className="text-orange-300"> {product.rating}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;

 