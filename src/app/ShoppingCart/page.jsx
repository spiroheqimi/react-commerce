"use client";

import React, { useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useCart } from "../../Context/CartContext";

export default function page() {
  const { cartItems } = useCart();
  // The number in the end of the reduce method sets the "total" value.
  const totalCartPrice = cartItems.reduce((total, item) => total + item.price, 0);

  
  // I can add a function that displays " Your Cart is empty" when cart is empty

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center gap-20">
      <div className="w-full h-full px-20 py-16 flex flex-col items-center gap-5">
        <h1 className="text-4xl font-semibold "> Your bag total is ${totalCartPrice}</h1>
        <h1 className="text-lg "> Free delivery and free returns. </h1>
        <button className="bg-black my-10 py-4 px-16 rounded-md border-[3px] border-black text-white text-xl font-semibold hover:bg-white hover:border-[3px] hover:border-black hover:text-black">
          Check out
        </button>
      </div>

      <div className="w-full h-full px-10 flex flex-col items-center justify-between gap-10">
        <h1 className="text-4xl font-semibold"> Your Cart </h1>
        <ShoppingCart />
      </div>
    </div>
  );
}

/* 

  Check out will not be implemented

*/
