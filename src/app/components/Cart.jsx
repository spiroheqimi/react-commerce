"use client"

import { FiShoppingBag } from "react-icons/fi"

export default function Cart ({ isOpen, closeCart }) {
  return (
    <div className={` ${isOpen ? 'bg-red-100' : 'bg-red-100'}`}> {/* by default its true of false which we have on states, we can put the tailwind style here instead of global css */}
      <button onClick={closeCart} className="close-button"> <FiShoppingBag size={25} /> </button>
    </div>
  );
};


