import background from "@/assets/images/trends-looks.png";
import { ProductsContext } from "@/contexts/ProductsContext";
import { useContext } from "react";
import ProductText from "./products/ProductText";
import Dot from "./Dot";
import MyButton from "./MyButton";

function TrendingLooksSection() {
  const selectedIds = [3, 4, 7];
  const products = useContext(ProductsContext);
  const filteredProducts = products.filter((p) => {
    return selectedIds.includes(p.id);
  });
  return (
    <div className="w-screen h-[140vh] sm:h-[90vh] bg-mist relative px-10 xl:px-35 py-20 overflow-hidden">
      {/* TEXT */}
      <div className="z-20 flex flex-col gap-2 font-bold text-gray-800 w-fit">
        <p className="text-gray-500 text-xl md:text-3xl font-thin">
          Super sale
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[66px] uppercase">
          TRENDING LOOKS
        </h1>
        <div className="flex gap-2 self-end items-center">
          <p className="text-xs md:text-sm font-bold">for only</p>
          <span className="bg-red-400 p-1 lg:p-2 text-white -rotate-6">
            $<span className="text-xl lg:text-2xl">49</span>
            .99
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 justify-between lg:items-center ">
        <div>
          {filteredProducts.map((f) => {
            return <ProductText key={f.id} title={f.title} price={f.price} />;
          })}
          {filteredProducts.map((f) => {
            return <ProductText key={f.id} title={f.title} price={f.price} />;
          })}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <MyButton text="shop men" />
          <MyButton text="shop woman" />
        </div>
      </div>
      <div
        className="absolute right-[10%] lg:right-[25%] top-[70%] sm:top-1/2 -translate-y-1/2
                w-[50%] sm:w-[30%] lg:w-[20%] z-0"
      >
        {/* IMAGE */}
        <img src={background} alt="" className="w-full object-cover" />

        {/* DOT man jacket*/}
        <Dot classes="top-[25%] left-[20%]" />
        {/* DOT man t-shirt*/}
        <Dot classes="top-[45%] left-[30%]" />
        {/* DOT man pants*/}
        <Dot classes="top-[60%] left-[18%]" />
        {/* DOT woman dress*/}
        <Dot classes="top-[55%] left-[70%]" />
        {/* DOT woman jacket*/}
        <Dot classes="top-[29%] left-[79%]" />
        {/* DOT woman shoes*/}
        <Dot classes="top-[88%] left-[78%]" />
      </div>
    </div>
  );
}

export default TrendingLooksSection;
