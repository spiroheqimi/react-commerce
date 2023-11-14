export default function Cart () {
  return (
    <div> 
      <h1> Cart page </h1>
    </div>
  );
};


/* 
  Adding the products on a Context and then we wrap Cart page with this Context so it shows these items.
  ! How will I deal with storing these products on memory 
    --  localstorage ?
    --  cookies ?


  When Adding product to cart , these will store into a State( Array of objects )
  This array will be passed into the Context
  And the Cart will be wrapped with this context making it show objects added on State




*/