import React from "react";
import Image from "next/image";

export default function CartProduct({ product }) {
  return (
    <div>
      <div className="bg-red-200 w-full p-10 flex gap-5">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
          />
        </div>

        <div className="w-full"> 
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
