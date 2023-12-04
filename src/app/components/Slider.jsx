"use client";

import Image from "next/image";
import products from "../products.json"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { FaRegHeart } from "react-icons/fa"
import Link from "next/link";

export default function Slider() {
  
  const Right = () => {
    document.getElementById('carousel').scrollLeft += 460;
  };

  const Left = () => {
    document.getElementById('carousel').scrollLeft -= 460;
  };


  return (
    <>
      <section className="w-full h-full flex justify-center items-center">
      <button className="bg-white rounded-full p-2 flex justify-center items-center hover:bg-slate-200" type="button" onClick={Left}> <IoIosArrowBack size={30} /> </button>
        <div id="carousel" className=" w-full h-128 flex items-center overflow-x-hidden">
          {products.map((product) => (
            <div key={product.id} id="" className="min-w-[22%] h-auto flex flex-nowrap justify-center rounded-md mx-20 my-3 shadow-secondary-color shadow-md hover:cursor-pointer">  
              <div className="flex flex-col w-full items-center gap-2 my-3">
                <div className="w-full flex justify-end">
                  <button className="w-10 h-10 pr-4 text-lg text-secondary-color font-semibold "> <FaRegHeart size={25}  /> </button>
                </div>
                <Link href={product.link}>  {/* Link should wrap the entire contianer. Rn only if the User clicks on image it will redirect. */}
                <Image
                  src={product.image}
                  width={200}
                  height={200}
                  alt={product.name}
                />
                </Link>
                
                <div className="w-full h-20 flex flex-col items-center gap-2">
                  <h1 className="text-black font-bold text-xl pt-2"> {product.name}</h1>
                  <div className="flex justify-center items-center gap-3">
                    <p className="font-semibold text-secondary-color "> ${product.price} </p>
                    <p className="font-semibold text-black underline-offset-1 line-through"> $199 </p>
                  </div>
                </div>
              </div>
            </div>  
          ))}
          
        </div>
        <button className="bg-white rounded-full p-2 flex justify-center items-center hover:bg-slate-200" type="button" onClick={Right}> <IoIosArrowForward size={30} /> </button>
      </section>
    </>
  );
}

/* 
  flex-nowrap and min-w-[%] makes them take % space within container and forcing them to overflow out of it 
  and we use overflow-clip to hide the overflow 
  
  Can store products on a JSON file / Leave it like this since its small content

*/
