import Image from "next/image";
import Link from "next/link";
import menimg from "/public/men-collection.png";
import collectionimg from "/public/img4.jpg";
import shirtimg from "/public/img3.jpg";
import shoesimg from "/public/shoes-img.jpg";
import sneakersimg from "/public/img1-shoes.jpg";
import banner from "/public/banner.jpeg";
import { FiPhoneCall } from "react-icons/fi";
import Slider from "./components/Slider";
import NewArrivals from "./components/NewArrivals";

export default function Home() {
  return (
    <>
      <main className="flex flex-col w-screen min-h-screen items-center justify-between">
        <section className="h-128 w-screen bg-secondary-color ">
          <div className="h-full w-full flex justify-center items-center ">
            <div className="flex flex-col w-96 gap-5">
              <h1 className="text-7xl font-bold"> Men's Collection </h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <button className="w-40 bg-black rounded-md text-white font-bold py-3 px-5">
                SHOP NOW
              </button>
            </div>
            <div className="w-1/2 h-full flex justify-end items-center overflow-hidden">
              <Image src={menimg} alt="men" width={750} height={750} />
            </div>
          </div>
        </section>

        {/* Services  */}
        <section className="w-screen bg-white flex justify-center items-center border-b-2 border-secondary-color gap-5">
          <div className="w-96 flex gap-8 items-center py-4 pl-5">
            <FiPhoneCall color="#BD995B" size={70} />
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold"> Free Shipping </p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div className="w-96 flex gap-8 items-center py-4 border-x-2 border-secondary-color px-5">
            <FiPhoneCall color="#BD995B" size={70} />
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold"> Free Shipping </p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div className="w-96 flex gap-8 items-center py-4 px-5">
            <FiPhoneCall color="#BD995B" size={70} />
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold"> Free Shipping </p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
        </section>

        {/* CARDS */}

        <section className="w-screen h-screen py-10">
          <div className="w-full h-full grid grid-cols-3 grid-rows-2 px-64 py-32 gap-10">
            <div className="border-3 border-secondary-color col-span-1 row-span-1 h-full flex flex-col justify-end gap-3">
              <div className="h-full w-full overflow-hidden">
                <Image objectFit="contain" src={sneakersimg} alt="men" />
              </div>
              <div className="absolute text-white p-8">
                <p className="text-2xl font-bold py-2">MEN'S SNEAKERS</p>
                <button className="bg-black py-3 px-8 rounded-md font-bold hover:bg-black hover:text-white hover:scale-95 transition-transform">
                  <Link href="/products"> SHOP NOW </Link>
                </button>
              </div>
            </div>

            <div className="border-3 border-secondary-color col-span-1 row-span-1 w-full h-full flex flex-col justify-end gap-3">
              <div className="h-full w-full overflow-hidden">
                <Image objectFit="contain" src={shoesimg} alt="men" />
              </div>

              <div className="absolute text-white p-8">
                <p className="text-2xl font-bold py-2">MEN'S SHOES</p>

                <button className="bg-black py-3 px-8 rounded-md font-bold hover:bg-black hover:text-white hover:scale-95 transition-transform">
                  <Link href="/products"> SHOP NOW </Link>
                </button>
              </div>
            </div>

            <div className="border-3 border-secondary-color col-span-1 row-span-2 w-full h-full flex flex-col justify-end gap-3">
              <div className="h-full w-full overflow-hidden">
                <Image objectFit="contain" src={shirtimg} alt="men" />
              </div>
              <div className="absolute text-white p-8">
                <p className="text-2xl font-bold py-2">MEN'S T-SHIRT</p>

                <button className="bg-black py-3 px-8 rounded-md font-bold hover:bg-black hover:text-white hover:scale-95 transition-transform">
                  <Link href="/products"> SHOP NOW </Link>
                </button>
              </div>
            </div>

            <div className=" border-3 border-secondary-color col-span-2 row-span-1 w-full h-full flex flex-col justify-end gap-3 ">
              <div className="h-full w-full overflow-hidden">
                <Image objectFit="contain" src={collectionimg} alt="men" />
              </div>
              <div className="absolute text-white p-8">
                <p className="text-2xl font-bold py-2">MEN'S COLLECTION</p>

                <button className="bg-black py-3 px-8 rounded-md font-bold hover:bg-black hover:text-white hover:scale-95 transition-transform">
                  <Link href="/products"> SHOP NOW </Link>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/*  NEW ARRIVALS */}

        <section className="w-full h-full flex flex-col items-center p-5 gap-10">
          <NewArrivals />

          <button className="w-40 bg-black rounded-md text-white font-bold py-3 px-5">
            VIEW MORE
          </button>
        </section>

        <div className="w-screen h-128 py-10 my-20 overflow-hidden">
          <Image src={banner} alt="banner" width={1920} height={300} />
        </div>

        <div className="w-screen h-screen flex flex-col items-center gap-20">
          <p className="font-bold text-3xl"> Best Seller </p>
          <div className="w-full flex justify-center px-48">
            <Slider />
          </div>
          <Link href="/products">
            <button className="w-40 bg-black rounded-md text-white font-bold py-3 px-5">
              VIEW MORE
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}

/* 

  The icons will change into Links if it will be used 
  Add toggle to search bar - maybe event listener 
  Logo should not move the search bar shows
  


*/
