import Image from "next/image";
import Link from "next/link";

export default function ({ product }) {
  return (
    <div>
      <Link href={product.link}>
        <div className="flex flex-col items-start gap-5 w-full p-10 m-2">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
          />
          <div className="w-full flex flex-col items-center">
            <p className="text-lg font-bold">{product.description}</p>
            <p className="text-secondary-color font-bold"> ${product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
