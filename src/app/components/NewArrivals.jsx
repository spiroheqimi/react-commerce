"use client";

import Link from "next/link";
import ProductList from "../products.json";
import Image from "next/image";

export default function NewArrivals() {
  const arrivalsList = ProductList.slice(0, 8);

  return (
    <div className="w-full h-full flex flex-col items-center overflow-hidden gap-10">
      <p className="font-bold text-3xl">NEW ARRIVALS</p>
      <div className="h-full w-[80%] flex flex-wrap justify-center gap-10">
        {arrivalsList.map((product) => (
          <div key={product.id} className="px-5">
            <Link href={product.link}>
              <div className="flex flex-col items-start gap-5 w-full m-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                />
                <div className="w-full flex flex-col items-center">
                  <p className="text-lg font-bold">{product.description}</p>
                  <p className="text-black font-bold">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
