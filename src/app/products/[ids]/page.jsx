"use client"

import Products from "../../products.json";
import Slider from "../../components/Slider2";
import { useCart } from "../../../Context/CartContext";

export default function ({ params }) {

  const { addToCart  } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div key={params.ids} className="w-screen min-h-screen px-28 overflow-hidden">
      {Products.filter((Products) => Products.id == params.ids).map((product) => (
          <div className="w-full h-screen flex gap-20 p-20">
            <div className="w-[50%] h-full flex justify-center items-center">
              <div className="w-full h-[70%] mx-10">
                <Slider />
              </div>
            </div>

            <div className="w-[50%] h-screen bg-white flex flex-col items-center gap-6 p-12">
              <div className="w-full flex flex-col gap-2">
                <h1 className="w-full font-bold text-3xl"> {product.name} </h1>
                <p className="w-full font-semibold text-lg"> {product.description} </p>
              </div>
              <div className="w-full flex items-end gap-5">
                <h1 className="font-bold text-2xl"> ${product.price} </h1>
              </div>

              <div className="w-full flex flex-col gap-4">
                <div>
                  <h1 className="w-full font-bold text-xl"> Sizes </h1>
                </div>

                <div className="w-full flex gap-4">
                  {product.sizes.map((size) => (
                    <div> 
                      <button className="bg-white py-1 px-8 rounded-md border-[3px] border-black font-bold hover:bg-black hover:text-white focus:bg-black focus:text-white">
                        {size}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full flex items-center justify-between py-4"></div>
              <div className="w-full flex justify-end gap-5">
                <button className="bg-black py-2 px-8 rounded-md border-[3px] border-black text-white font-bold hover:bg-white hover:border-[3px] hover:border-black hover:text-black ">
                  BUY
                </button>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="bg-white py-2 px-8 rounded-md border-[3px] border-black font-bold hover:bg-black hover:text-white active:scale-95 transition-transform">
                  ADD TO CHART  
                </button>
              </div>
              <h1 className="w-full font-bold text-3xl"> Details </h1>
              <p>
                {product.description}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

/* 
  Will use CartContext here so i can add into state - cartItems 
  and since the Providers wraps {children} on Layout i can use it everywhere i call useCart()
*/
