"use client";

import Image from "next/image";
import products from "../products.json"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

export default function Slider() {

  const Right = () => {
    document.getElementById('carousel').scrollLeft += 500;
  };

  const Left = () => {
    document.getElementById('carousel').scrollLeft -= 500;
  };

  return (
    <>
      <section className="w-full h-full flex justify-center items-center">
      <button className="bg-white rounded-full p-2 flex justify-center items-center hover:bg-slate-200" type="button" onClick={Left}> <IoIosArrowBack size={30} /> </button>
        <div id="carousel" className=" w-full h-128 flex items-center overflow-x-hidden">
          {products.map((product) => (
            <div key={product.id} className="min-w-[100%] h-auto flex flex-nowrap justify-center rounded-md hover:cursor-pointer">  
              <div className="flex flex-col w-full justify-center items-center">
                <div className="w-full flex justify-center">
                <Image
                  src={product.image}
                  width={400}
                  height={400}
                  alt={product.name}
                />
                </div>
              </div>
            </div>  
          ))}
          
        </div>
        <button className="bg-white rounded-full p-2 flex justify-center items-center hover:bg-gray-200" type="button" onClick={Right}> <IoIosArrowForward size={30} /> </button>
      </section>
    </>
  );
}

/* 
  Products will have a link for the page they are on the website
  And an image src
  flex-nowrap and min-w-[%] makes them take % space within container and forcing them to overflow out of it 
  and we use overflow-clip to hide the overflow 
  
  Can store products on a JSON file / Leave it like this since its small content
  
  - Button icons
  - Card styling 
  - Card content


*/
