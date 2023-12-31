import Image from "next/image";
import Link from "next/link";
import menimg from "public/men-collection.png";
import { FiPhoneCall } from "react-icons/fi";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <main className="flex flex-col w-screen min-h-screen items-center justify-between">
        <section className="h-128 w-screen bg-secondary-color ">
          <div className="h-full w-full flex justify-center items-center ">
            <div className="flex flex-col w-96 gap-5">
              <h1 className="text-7xl font-bold"> Men's Collection </h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <button className="w-40 bg-black rounded-md text-white py-3 px-5">
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

        <div className="w-screen h-screen py-10">
          <div className="w-full h-full grid grid-cols-3 grid-rows-2 px-64 py-32 gap-10">
            {/* Cards */}
            <div className="border-2 border-secondary-color col-span-1 row-span-1 w-full h-full flex flex-col justify-end p-8 gap-3">
              <p className="text-2xl font-bold">MEN'S SNEAKERS</p>

              <button className="w-40 bg-white rounded-md border-black border-4 text-black py-3 px-3 font-bold">
                <Link href="/products"> SHOP NOW </Link>
              </button>
            </div>
            <div className="border-2 border-secondary-color col-span-1 row-span-1 w-full h-full flex flex-col justify-end p-8 gap-3">
              <p className="text-2xl font-bold">MEN'S SHOES</p>

              <button className="w-40 bg-white rounded-md border-black border-4 text-black py-3 px-3 font-bold">
                <Link href="/products"> SHOP NOW </Link>
              </button>
            </div>
            <div className="border-2 border-secondary-color col-span-1 row-span-2 w-full h-full flex flex-col justify-end p-8 gap-3">
              <p className="text-2xl font-bold">MEN'S T-SHIRT</p>

              <button className="w-40 bg-white rounded-md border-black border-4 text-black py-3 px-3 font-bold">
                <Link href="/products"> SHOP NOW </Link>
              </button>
            </div>
            <div className="border-2 border-secondary-color col-span-2 row-span-1 w-full h-full flex flex-col justify-end p-8 gap-3">
              <p className="text-2xl font-bold">MEN'S COLLECTION</p>

              <button className="w-40 bg-white rounded-md border-black border-4 text-black py-3 px-3 font-bold">
                <Link href="/products"> SHOP NOW </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="w-screen h-screen flex flex-col items-center">
          <p className="font-bold text-3xl">NEW ARRIVALS</p>
          <div className="w-full h-full grid grid-cols-4 grid-rows-2 px-64 py-32 gap-10 ">
            <div className="border-2 border-secondary-color col-span-1 row-span-1 w-full h-full flex flex-col items-center justify-end gap-1 py-2">
              {/* image */}
              <p className="font-semibold text-xl"> Products </p>
              <p className="font-medium text-lg">
                <span className="text-secondary-color pr-1">$</span>120.50
              </p>
            </div>
            <div className="border-2 border-secondary-color col-span-1 row-span-1 w-full h-full flex flex-col items-center justify-end gap-1 py-2">
              {/* image */}
              <p className="font-semibold text-xl"> Products </p>
              <p className="font-medium text-lg">
                <span className="text-secondary-color pr-1">$</span>120.50
              </p>
            </div>
            <div className="border-2 border-secondary-color col-span-1 row-span-1 w-full h-full flex flex-col items-center justify-end gap-1 py-2">
              {/* image */}
              <p className="font-semibold text-xl"> Products </p>
              <p className="font-medium text-lg">
                <span className="text-secondary-color pr-1">$</span>120.50
              </p>
            </div>
            <div className="border-2 border-secondary-color col-span-1 row-span-1 w-full h-full flex flex-col items-center justify-end gap-1 py-2">
              {/* image */}
              <p className="font-semibold text-xl"> Products </p>
              <p className="font-medium text-lg">
                <span className="text-secondary-color pr-1">$</span>120.50
              </p>
            </div>
            <div className="border-2 border-secondary-color col-span-1 row-span-1 w-full h-full flex flex-col items-center justify-end gap-1 py-2">
              {/* image */}
              <p className="font-semibold text-xl"> Products </p>
              <p className="font-medium text-lg">
                <span className="text-secondary-color pr-1">$</span>120.50
              </p>
            </div>
            <div className="border-2 border-secondary-color col-span-1 row-span-1 w-full h-full flex flex-col items-center justify-end gap-1 py-2">
              {/* image */}
              <p className="font-semibold text-xl"> Products </p>
              <p className="font-medium text-lg">
                <span className="text-secondary-color pr-1">$</span>120.50
              </p>
            </div>
            <div className="border-2 border-secondary-color col-span-1 row-span-1 w-full h-full flex flex-col items-center justify-end gap-1 py-2">
              {/* image */}
              <p className="font-semibold text-xl"> Products </p>
              <p className="font-medium text-lg">
                <span className="text-secondary-color pr-1">$</span>120.50
              </p>
            </div>
            <div className="border-2 border-secondary-color col-span-1 row-span-1 w-full h-full flex flex-col items-center justify-end gap-1 py-2">
              {/* image */}
              <p className="font-semibold text-xl"> Products </p>
              <p className="font-medium text-lg">
                <span className="text-secondary-color pr-1">$</span>120.50
              </p>
            </div>
          </div>

          <button className="w-40 bg-black rounded-md text-white py-3 px-5">
            VIEW MORE
          </button>
        </div>

        <div className="w-screen h-128 py-10 my-20">
          <div className="h-full border-2 border-secondary-color">Banner</div>
        </div>

        <div className="w-screen h-screen flex flex-col items-center gap-20">
          <p className="font-bold text-3xl"> Best Seller </p>
          <div className="w-full flex justify-center px-48">
            <Slider />
          </div>
          <Link href="/products">
            <button className="w-40 bg-black rounded-md text-white py-3 px-5">
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
