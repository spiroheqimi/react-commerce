import { useCart } from "../../Context/CartContext";
import CartProduct from "./CartProduct";
import CartPrice from "./CartPrice";

export default function () {
  const { cartItems, clearCart } = useCart();

  const itemPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const price = Math.round(itemPrice * 100) / 100;

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
          </div>
        ))}
        <div className="w-[80%] h-full flex flex-col items-end py-10 px-13">
          <CartPrice price={price}/>
        </div>
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
