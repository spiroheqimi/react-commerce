import {useState} from "react";
import { useCart } from "../../Context/CartContext";
import Image from "next/image";

export default function CartProduct({ product }) {
  // Function that will change the quantity number based on the Selected

  const { cartItems, addToCart , decreaseQuantity  } = useCart();

  const [selectedOption, setSelectedOption] = useState(product.quantity);
  const currentQuantity = product.quantity
  const handleChange = (event) => {
    setSelectedOption(event.target.value)
  };

  function handleQuantityChange(selectedOption, currentQuantity){
    const delta = currentQuantity - selectedOption
    if(delta > 0){
      // decreaseQuantity(product)
    } else if(delta < 0){
      // addToCart(product)
    }
  } 
  

  console.log(product.quantity)

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
          <p>Description: {product.description}</p>
          <select value={selectedOption} onChange={handleChange}>
            <option value="1"> 1</option>
            <option value="2"> 2</option>
            <option value="3"> 3</option>
            <option value="4"> 4</option>
            <option value="5"> 5</option>
            <option value="6"> 6</option>
            <option value="7"> 7</option>
            <option value="8"> 8</option>
            <option value="9"> 9</option>
          </select>
        </div>
      </div>
    </div>
  );
}

/* 
  !! I should trigger add/remove func n times when the quantity changes ( n - delta of old quant and selected quant )

  
*/
