import React, { useRef } from 'react'
import { trainers } from '../data/featuredProduct';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addPlanToCart } from '../Slices/workplan.slice';
function Plans() {

    const trainersRef = useRef(null);
const dispatch = useDispatch()

const handleCheckout = (product) => {
  dispatch(addPlanToCart([product]));  // Pass product as an array
  console.log("adding items to cart");
};

    
  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (<>
    
    <div className="   flex  my-10 justify-center items-center  font-serif bg -gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-center  ">
    <h1 className="text-4xl py-6  text-yellow-500  font-bold  ">
      WORKOUT PLANS
    </h1>
  </div>

  <h1 className=" relative text-2xl font-serif  max-w-[70%] mx-auto mt-20  text-blue-900  font-bold  ">
    Gain Strength Workout Plans
  </h1>

  {/* Left Arrow */}

  <div className=" relative flex overflow-x-auto scroll max-w-[90%] md:max-w-[70%] mx-auto  gap-5   my-5">
    <button
      onClick={() => scroll(trainersRef, "left")}
      className="absolute left-0 top-[50%] -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-300  z-10"
    >
      ←
    </button>

    {/* Scrollable Container */}
    <div
      ref={trainersRef}
      className="flex overflow-x-scroll gap-5 hide-scrollbar scroll-smooth"
    >
      {trainers.map((product) => (
        <div
          key={product.id}
          className="flex flex-col border p-4 rounded-md shadow-md hover:shadow-lg   group transition-shadow duration-300 bg-white"
        >
          {/* Product Image */}
          <div className="w-full flex justify-center hover:scale-105 transition-transform duration-300 mb-3">
            <Image
              src={product.image}
              alt={product.title}
              height={300}
              width={300}
              className=" min-w-[250px] h-[250px]  md:min-w-[300px] md:h-[300px] "
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
              <p className="  text-xl text-gray-800">
                {product.price}{" "}
                <span className="text-xs text-gray-600">
                  {product.discount}
                </span>
              </p>
            </div>
            <p 
            onClick={()=>(handleCheckout(product))}
            className="text-blue-900 transition-all   duration-500 bg-yellow-500  text-center mt-7 py-2 rounded-xl hover:bg-blue-500 hover:text-white cursor-pointer text-lg">
              View Plan
            </p>
            {/* Add to Cart Button */}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll(trainersRef, "right")}
            className="absolute right-0   top-[50%]  -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300  "
          >
            →
          </button>
        </div>
      ))}
    </div>
  </div>
  </>)
}

export default Plans