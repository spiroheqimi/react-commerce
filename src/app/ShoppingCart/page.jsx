"use client";

import React, { useState } from "react";
import CartContext from "../../Context/CartContext";
import ShoppingCart from "../components/ShoppingCart";

export default function page() {

  /* 
    i have to use context here and loop through items to count their price
  */

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div className="w-full h-full px-20 py-16 flex flex-col items-center gap-5">
        <h1 className="text-4xl font-semibold "> Your bag total is $ </h1>
        <h1 className="text-lg "> Free delivery and free returns. </h1>
        <button className="bg-black my-10 py-4 px-16 rounded-md border-[3px] border-black text-white text-xl font-semibold hover:bg-white hover:border-[3px] hover:border-black hover:text-black">
          Check out
        </button>
      </div>

      <div className="w-full h-full px-20 flex flex-col items-center">
        <h1> Products </h1>
        <div className="w-full h-full ">
          <h1> Here will show the lsit of products added on cart </h1>
            <ShoppingCart/>
        </div>
      </div>
    </div>
  );
}

/* 

  I need to add a button component for adding to cart that will have the function of updating the state of products 

*/
