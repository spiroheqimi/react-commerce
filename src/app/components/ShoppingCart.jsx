import { useEffect } from "react";
import { useCart } from "../../Context/CartContext";
import CartProduct from "./CartProduct";

export default function () {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div>
      <div className="w-screen h-full flex flex-col justify-center">
        {cartItems.map((item, index) => (
          <div
            className="w-full h-full flex justify-center items-center px-10 gap-10"
            key={index}
          >
            <CartProduct product={item} />
            <button
              className="bg-black my-10 py-3 px-10 rounded-md border-[3px] border-black text-white text-sm font-medium hover:bg-white hover:border-[3px] hover:border-black hover:text-black"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
        {/*  Total  */}
        <div className="flex justify-center">
          <button
            className="bg-black my-10 py-4 px-16 rounded-md border-[3px] border-black text-white text-xl font-semibold hover:bg-white hover:border-[3px] hover:border-black hover:text-black"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

/* 

  I will map through products
  Each product will have : 
    - general details 
    - remove from cart button
  In the end of the cart there will be another button  clearing all cart

  I will create a component "CartProducts" that will take "key,product" as props and will render the details properly

  
*/
