import Slider from "../components/Slider2"


export default function page() {
  return (
    <main className="w-screen min-h-screen px-28 overflow-hidden">
      <section className="w-full h-screen flex gap-20 p-20">
          <div className="w-[20%] h-full"> 
            <h1>Sidebar</h1>
          </div>

          <div>
            <h1>Search bar</h1>
            <h1>Recommendation</h1>
            <h1>Products</h1>
          </div>
      </section>
    </main>
  )
}

/* 

  Product will have : Name, Colors, Sizes, Price, Description, Image
  Dynamic routing for products
  Image, Color, Size, Description (DATA) will come from "database" and only the specific clicked product will be shown
  I want to dynamicaly add the color circles ( we pass 2 arguments on a function , array for the color and integer for the number of circles )
  The same will happen for Sizes 

*/