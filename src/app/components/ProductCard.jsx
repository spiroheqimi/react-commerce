import Image from "next/image";

export default function ({ product }) {

  return (
    <div>
      <div className="bg-red-200 flex flex-col w-full p-10 m-2">
        <Image 
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
        />
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
