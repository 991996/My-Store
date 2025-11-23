import { useState } from "react";
import ProductCard2 from "./products/ProductCard2";

function Dot({ classes, product }) {
  const [dotHover, setDotHover] = useState(null);
  return (
    <div className={`absolute ${classes} cursor-pointer`}>
      <div
        className=" relative"
        onMouseEnter={() => setDotHover(true)}
        onMouseLeave={() => setDotHover(false)}
      >
        <div className="w-5 aspect-square rounded-full bg-red-600 flex justify-center items-center">
          <div className="w-2 aspect-square rounded-full bg-white"></div>
        </div>

        <div
          className={`absolute -left-[202px] top-1/2 -translate-y-1/2 bg-white p-3 shadow-lg w-[200px]
           ${dotHover ? "" : "hidden"} z-100`}
        >
          {product && <ProductCard2 product={product} />}
        </div>
      </div>
    </div>
  );
}

export default Dot;
