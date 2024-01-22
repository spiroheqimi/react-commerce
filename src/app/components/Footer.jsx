"use client";

import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoWhatsapp,
  BiLogoLinkedin,
  BiCopyright,
  BiPhone,
} from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <section className="bottom-0 w-screen h-80 bg-secondary-color flex gap-15 justify-center text-white px-40 py-16 ">
        <div className="w-80 h-full flex flex-col text-sm font-medium tracking-wide gap-4">
          <h1 className="uppercase font-bold text-lg">Contact Details</h1>
          <div className="w-auto flex gap-3 justify-start ">
            <IoLocationSharp color="FFFFFF" size={30} />
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="w-auto flex gap-3 justify-start items-center">
            <BiPhone color="FFFFFF" size={30} />
            <p>+355 69 3595 443</p>
          </div>
          <div className="w-auto flex gap-3 justify-start items-center">
            <FiMail color="FFFFFF" size={30} />
            <p>spiroheqimi92@gmail.com</p>
          </div>
        </div>

        <div className="w-52 h-full flex flex-col text-sm font-medium tracking-wide gap-3 pl-10">
          <h1 className="uppercase font-bold text-lg">Products</h1>
          <div className="w-full flex gap-2 justify-start items-center">
            <IoIosArrowForward color="FFFFFF" size={10} />
            <p>Products</p>
          </div>
          <div className="w-full flex gap-2 justify-start items-center">
            <IoIosArrowForward color="FFFFFF" size={10} />
            <p>Best Seller</p>
          </div>
          <div className="w-full flex gap-2 justify-start items-center">
            <IoIosArrowForward color="FFFFFF" size={10} />
            <p>New Collection</p>
          </div>
          <div className="w-full flex gap-2 justify-start items-center">
            <IoIosArrowForward color="FFFFFF" size={10} />
            <p>New Arrivals</p>
          </div>
        </div>

        <div className="w-68 h-full flex flex-col text-sm font-medium tracking-wide gap-3 px-10">
          <h1 className="uppercase font-bold text-lg">Services</h1>
          <div className="w-full flex gap-2 justify-start items-center">
            <IoIosArrowForward color="FFFFFF" size={10} />
            <p>Free Shipping</p>
          </div>
          <div className="w-full flex gap-2 justify-start items-center">
            <IoIosArrowForward color="FFFFFF" size={10} />
            <p>Terms & Conditions </p>
          </div>
          <div className="w-full flex gap-2 justify-start items-center">
            <IoIosArrowForward color="FFFFFF" size={10} />
            <p>Cancellation Policies</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="uppercase font-bold tracking-wide text-lg">
            Join our newsletter now
          </h1>
          <div className="flex gap-3">
            <input
              placeholder="Email Address"
              type="text"
              className="border-2 rounded-md border-white bg-transparent placeholder:text-white placeholder:text-sm px-4 py-2 focus:outline-none focus:placeholder-transparent"
            />
            <button className="px-8 py-2 bg-black rounded-md text-base font-semibold tracking-widest">SUBMIT</button>
          </div>

          <div className="w-full">
            <h1 className="text-xs font-bold">
              Get E-mail updates about our latest offers.{" "}
            </h1>
          </div>

          <div className="flex gap-2">
            <Link href="/" className="border-2 border-white rounded-full p-1">
              <BiLogoFacebook color="white" size={20} />
            </Link>
            <Link href="/" className="border-2 border-white rounded-full p-1">
              <BiLogoInstagram color="white" size={20} />
            </Link>
            <Link href="/" className="border-2 border-white rounded-full p-1">
              <BiLogoWhatsapp color="white" size={20} />
            </Link>
            <Link href="/" className="border-2 border-white rounded-full p-1">
              <BiLogoLinkedin color="white" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-black text-white w-screen h-10 px-20 flex items-center justify-start gap-1">
        Copyright <BiCopyright /> 2000 Brand. All rights reserved.
      </div>
    </>
  );
}

/* 
  Will change later to LINKS to redirect to pages



*/
