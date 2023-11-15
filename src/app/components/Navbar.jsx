"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaRegHeart,
} from "react-icons/fa";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="w-full flex flex-col justify-center">
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
            <button className="text-white font-bold"> Sign In </button>
            <button className="text-white font-bold"> Sign Up </button>
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
            <Link href="/ShoppingCart">
              <FiShoppingBag size={25} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
