export default function CartPrice({ price }) {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <div className="w-full h-full flex justify-between">
        <p className="text-lg font-normal">Subtotal</p>
        <p className="text-lg font-normal">${price}</p>
      </div>
      <div className="w-full h-full flex justify-between">
        <p className="text-lg font-normal">Shipping</p>
        <p className="text-lg font-semibold">FREE</p>
      </div>
      <div className="w-full h-full flex justify-between border-t-2 border-gray-400 py-4">
        <p className="text-2xl font-semibold">Total</p>
        <p className="text-2xl font-semibold">${price}</p>
      </div>
      <div className="w-full h-full flex justify-end">
        <button className="bg-black my-10 py-3 px-12 rounded-md border-[3px] border-black text-white text-lg font-medium hover:bg-white hover:border-[3px] hover:border-black hover:text-black">
          Check out
        </button>
      </div>
    </div>
  );
}
