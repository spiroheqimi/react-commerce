import React from "react";
import { useCart } from "../../Context/CartContext"; 

export default function () {
  const { cartItems , removeFromCart, clearCart } = useCart();

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button 
        className="bg-black my-10 py-4 px-16 rounded-md border-[3px] border-black text-white text-xl font-semibold hover:bg-white hover:border-[3px] hover:border-black hover:text-black"
        onClick={handleClearCart}>
        Clear Cart
        </button>
    </div>
  );
}


/* 

  I will map through products
  Each product will have : 
    - general details
    - remove from cart button
  In the end of the cart there will be another button  clearing all cart

*/


/* 
 

  This will be the component that i will add into the page and it will map the products added into cart
  If there is no product i want to show " No products on Bag " and a " Link tag" that takes to the products
  I can use useEffect for this maybe 

*/