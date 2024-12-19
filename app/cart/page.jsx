"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";  // Assuming `protein.slice` handles protein items

function Page() {
  const dispatch = useDispatch();
 
  // const proteinCartItems = useSelector((state) => state.proteinCart.proteinItems);
  const proteinCartItems = useSelector((state) => state.proteinCart.proteinItems);
  const workplanCartItems = useSelector((state) => state.workplanCart.selectedPlans);

  console.log(proteinCartItems);
 
  const totalPrice = proteinCartItems.reduce(
    (total, item) =>
      total + item.price * (item.quantity ? parseInt(item.quantity) : 1),  
    0
  );
 
  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart({ id }));  
  };
 
  const handleQuantityChange = (id, action) => {
    const item = proteinCartItems.find((item) => item.id === id);
    if (!item) return;

    let newQuantity = item.quantity ? parseInt(item.quantity) : 1;

    if (action === "increase") {
      newQuantity += 1;
    } else if (action === "decrease" && newQuantity > 1) {
      newQuantity -= 1;
    }

    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  return (
    <section className="w-full items-center mt-20 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                Shopping Cart
              </h2>
              <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                {proteinCartItems.length} {proteinCartItems.length === 1 ? "Item" : "Items"}
              </h2>
            </div>

            {proteinCartItems.length > 0 ? (
              proteinCartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group"
                >
                  <div className="w-full md:max-w-[126px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="mx-auto rounded-xl object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                    <div className="md:col-span-2">
                      <div className="flex flex-col max-[500px]:items-center gap-3">
                        <h6 className="font-semibold text-base leading-7 text-black">
                          {item.name}
                        </h6>
                        <h6 className="font-medium text-base leading-7 text-gray-600">
                          ${item.price}
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                      <div className="flex items-center h-full">
                        <button
                          onClick={() => handleQuantityChange(item.id, "decrease")}
                          className="px-3 py-1 bg-gray-200 rounded-md"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                          value={item.quantity || 1}
                          readOnly
                        />
                        <button
                          onClick={() => handleQuantityChange(item.id, "increase")}
                          className="px-3 py-1 bg-gray-200 rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                      <p className="font-bold text-lg leading-8 text-gray-600 text-center">
                        ${(item.price * (item.quantity ? parseInt(item.quantity) : 1)).toFixed(2)}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <div className="flex justify-end w-full mt-4">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 font-semibold text-base leading-7"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-10">
                Your cart is empty.
              </p>
            )}
          </div>

          {/* Order Summary Section */}
          <div className="col-span-10 ml-10 md:mx-auto pb-6 md:col-span-12 xl:col-span-4 w-full max-xl:px-6 max-w-3xl xl:max-w-2xl mx-auto lg:p-8 mt-20 bg-gray-50">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black border-b border-gray-300">
              Order Summary
            </h2>
            <div className="mt-8">
              <div className="flex items-center justify-between pb-6">
                <p className="font-normal text-lg leading-8 text-black">
                  {proteinCartItems.length} {proteinCartItems.length === 1 ? "Item" : "Items"}
                </p>
                <p className="font-medium text-lg leading-8 text-black">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
