"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaRegHeart,
} from "react-icons/fa";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import { useCart } from "../../Context/CartContext";

export default function Navbar() {

  const { cartItems } = useCart();
  const cartProducts = cartItems.length

  return (
    <div>
      <nav className="min-w-full flex flex-col justify-center">
        <div className="sticky flex bg-secondary-color justify-between items-center h-13 px-20 ">
          <div className="flex items-center gap-4">
            <button className="rounded-full border-2 border-white p-1">
              <FaFacebookF color="#FFFFFF" />
            </button>
            <button className="rounded-full border-2 border-white p-1">
              <FaWhatsapp color="#FFFFFF" />
            </button>
            <button className="rounded-full border-2 border-white p-1">
              <FaInstagram color="#FFFFFF" />
            </button>
          </div>
          <div className="flex gap-6">
            {/* I need to make this div display only for viewers not users */}
            <Link href="/signin">
              <button className="text-white font-bold"> Sign in </button>
            </Link>
            <Link href="/register">
              <button className="text-white font-bold"> Register </button>
            </Link>
          </div>
        </div>

        <div className="bg-white w-full h-20 px-20 flex justify-between items-center  ">
          <div className="">
            <Link className="text-4xl font-bold" href="/">
              Brand
            </Link>
          </div>

          <div className="bg-white flex h-12 items-center justify-center gap-12 font-bold">
            <Link href="/"> HOME </Link>
            <Link href="/about"> ABOUT US </Link>
            <Link href="/arrivals"> NEW ARRIVALS </Link>
            <Link href="/products"> PRODUCTS </Link>
            <Link href="/contact"> CONTACT </Link>
          </div>

          <div className="flex justify-center items-center gap-6">
            <div className="flex justify-center items-center rounded-full border-3 px-4 border-black">
              <input
                placeholder="Search"
                id="search-field"
                className="w-48 h-10  focus:placeholder-transparent focus:outline-none"
              ></input>
              <button className="flex gap-2" id="search-button">
                <FiSearch size={25} />
              </button>
            </div>
            <button>
              <FaRegHeart size={25} />
            </button>
            <Link className="relative p-1" href="/ShoppingCart">
              <FiShoppingBag size={25} />
              <div className="bg-black h-[18px] w-[18px] absolute top-0 right-0 flex justify-center items-center text-white text-[12px] rounded-full">
                {cartProducts}
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
