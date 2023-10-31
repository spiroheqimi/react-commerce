import React from "react";

export default function ({ product }) {
  return (
    <div>
      <div className="bg-red-200 flex flex-col w-full p-10 m-2">
        <h3>{product.name}</h3>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
