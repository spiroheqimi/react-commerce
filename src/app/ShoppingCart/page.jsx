"use client";

import React, { createContext, useState, useContext } from "react";
import { CartProducts } from "@/app/components/ShoppingCart";

export const Cart = createContext<Object>(null);

export default function page() {
  const [products, setProducts] = useState(null);
  const [sum, setSum] = useState(0);

  function cartSum() {
    /*  the function will take products from Context */
    setSum();
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div className="w-full h-full px-20 py-16 flex flex-col items-center gap-5">
        <h1 className="text-4xl font-semibold "> Your bag total is ${sum} </h1>
        <h1 className="text-lg "> Free delivery and free returns. </h1>
        <button className="bg-black my-10 py-4 px-16 rounded-md border-[3px] border-black text-white text-xl font-semibold hover:bg-white hover:border-[3px] hover:border-black hover:text-black">
          Check out
        </button>
      </div>

      <div className="w-full h-full px-20 flex flex-col items-center">
        <h1> Products </h1>
        <div className="w-full h-full ">
          <h1> Here will show the lsit of products added on cart </h1>
          <Cart.Provider value={ products }>
            <CartProducts />
          </Cart.Provider>
        </div>
      </div>
    </div>
  );
}

export function useCartContext() {
  const context = useContext(Cart);
  if (!context) {
    throw new Error("Cart its not inside the CartProvider");
  }
  return context;
}

/* 

  I need to add a button component for adding to cart that will have the function of updating the state of products 

*/
