import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const storeArrayInLocalStorage = (items) => {
    try {
      localStorage.clear();
      localStorage.setItem("myArray", JSON.stringify(items));
      console.log("Array stored in localStorage");
    } catch (error) {
      console.error("Error storing array in localStorage:", error);
    }
  };

  const retrieveArrayFromLocalStorage = () => {
    try {
      const storedArray = localStorage.getItem("myArray");
      if (storedArray) {
        const parsedArray = JSON.parse(storedArray);
        console.log("Retrieved array from localStorage:", parsedArray);
        setCartItems(parsedArray);
      }
    } catch (error) {
      console.error("Error retrieving array from localStorage:", error);
    }
  };

  useEffect(() => {
    retrieveArrayFromLocalStorage(); // Since this runs on mount, we can try to clear local storage when adding products. "cartItems" has retrieved the items so we wont lose them.
  }, []);

  const addToCart = (item) => {
    // The quantity function should be added here
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }
    setCartItems(updatedCart);
    storeArrayInLocalStorage(updatedCart);
  }; 
  
  const reduceQuantity = (item) => {
    // The quantity function should be added here
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity -= 1;
    }
    setCartItems(updatedCart);
    storeArrayInLocalStorage(updatedCart);
  }; 

  const removeFromCart = (id) => {
    const newCartItems = [...cartItems];
    const filtered = newCartItems.filter((item) => item.id !== id);
    setCartItems(filtered);
    storeArrayInLocalStorage(filtered);
  };


  const clearCart = () => {
    setCartItems([]);
    localStorage.clear();
  };

  return (
    <CartContext.Provider
      value={{ cartItems,reduceQuantity ,addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

/* 

  So the items will be staying in 2 different states 
    cartItems 


*/
