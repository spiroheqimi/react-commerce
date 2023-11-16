"use client";

import { useState, createContext, useContext } from "react";

export function useCart() {
  return useContext(CartContext);
}

export default function CartContext({ children }) {

  const CartContext = createContext();
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* 
  This component will map through products


*/

/* 
  Adding the products on a Context and then we wrap Cart page with this Context so it shows these items.
  ! How will I deal with storing these products on memory 
    --  localstorage ?
    --  cookies ?


  When Adding product to cart , these will store into a State( Array of objects )
  This array will be passed into the Context
  And the Cart will be wrapped with this context making it show objects added on State




*/
