import { useState } from "react";
import { useCart } from "../../Context/CartContext";
import Image from "next/image";

export default function CartProduct({ product }) {
  // Function that will change the quantity number based on the Selected

  const { addToCart, reduceQuantity, removeFromCart } = useCart();

  const [selectedOption, setSelectedOption] = useState(product.quantity);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    const quantityDiff = product.quantity - event.target.value;

    if (quantityDiff < 0) {
      for (let i = 0; i < Math.abs(quantityDiff); i++) {
        addToCart(product);
      }
    } else if (quantityDiff > 0) {
      for (let i = 0; i < Math.abs(quantityDiff); i++) {
        reduceQuantity(product);
      }
    }
  };

  const itemPrice = product.quantity * product.price;
  const price = Math.round(itemPrice * 100) / 100;

  return (
    <div className="w-[65%] h-full ">
      <div className="w-full h-full py-36 flex p-10 gap-10 border-b-2 border-gray-400">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
          />
        </div>

        <div className="w-full flex justify-center items-center gap-10 px-10">
          <div className="w-full h-full flex flex-col gap-2">
            <h1 className="text-xl font-semibold">{product.name}</h1>
            <p className="text-lg font-medium">{product.description}</p>
            <div className="w-full h-full py-10 border-t-2 border-b-2 border-gray-400 ">
              <p className="text-sm font-normal">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                numquam maxime veritatis ex quasi a! Ex officiis nesciunt, odit
                voluptatibus accusamus quia quidem libero illo sint sed? Sequi,
                vel asperiores.
              </p>
            </div>
          </div>
          <div className="h-full flex">
            <select
              className="h-8 w-12 rounded-md "
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
              <option value="5"> 5</option>
              <option value="6"> 6</option>
              <option value="7"> 7</option>
              <option value="8"> 8</option>
              <option value="9"> 9</option>
              <option value="10"> 10</option>
            </select>
          </div>
          <div className="h-full flex flex-col items-center justify-between py-1">
            <p className="text-xl font-semibold"> ${price}</p>
            <button
              className="bg-black my-10 py-3 px-10 rounded-md border-[3px] border-black text-white text-sm font-medium hover:bg-white hover:border-[3px] hover:border-black hover:text-black"
              onClick={() => removeFromCart(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
  
  Can add 2 buttons aside of quantity.
    - Increase
    - Decrease
  
*/
