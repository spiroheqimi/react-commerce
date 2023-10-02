"use client"

import { FaFacebookF, FaInstagram, FaWhatsapp, FaRegHeart } from "react-icons/fa";
import { FiPhoneCall, FiSearch, FiShoppingBag } from "react-icons/fi";
import Link from "next/link";


export default function Navbar() {

  // Default we set to be hidden and we create the function "searchField"  
  // Accessing the display property using DOM 
  const searchField = () =>{
    document.getElementById("search-field").style.display = "block";
    document.getElementById("search-field").style.transition = "ease-in"
    document.getElementById("search-field").style.transitionDelay = "200"
  } 


  return (
    <div>
      <nav className="w-full flex flex-col justify-center">
        <div className="sticky flex bg-secondary-color justify-between items-center h-13 px-20 ">
          <div className="flex items-center gap-6">
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

        <div className="flex bg-white justify-between items-center h-20 px-20">

          <div className="flex items-center gap-6">
            <div className="flex gap-5 items-center">
              <FiPhoneCall color="#BD995B" size={40} />

              <div className="flex flex-col">
                <h1 className="text-secondary-color text-xl font-bold">
                  Call us
                </h1>
                <span className="font-bold"> 069 35 35 355 </span>
              </div>
            </div>
          </div>

          <div className="ml-32">
            <Link className="text-4xl font-bold" href="/">Logo</Link>
          </div>

          <div className="flex justify-center items-center gap-6">
            <div className="flex justify-center items-center rounded-full border-3 px-4 border-black">
            <input placeholder="Search" id="search-field" className="w-48 h-10  focus:placeholder-transparent focus:outline-none">
              </input>
              <button className="flex gap-2" id="search-button" /* onClick={searchField} */> 
                <FiSearch size={25} />
              </button>
            </div>
            <button>
              <FaRegHeart size={25} />
            </button>
            <button>
              <FiShoppingBag size={25} />
            </button>
          </div>
        </div>

        <div className="bg-white flex h-12 items-center justify-center gap-12 font-bold">
          <Link href="/" className="text-secondary-color underline-offset-2"> HOME </Link>
          <Link href="/about"> ABOUT US </Link>
          <Link href="/contact"> CONTACT </Link>
          <Link href="/arrivals"> NEW ARRIVALS </Link>
          <Link href="/products"> PRODUCTS </Link>
        </div>
      </nav>
    </div>
  );
}


