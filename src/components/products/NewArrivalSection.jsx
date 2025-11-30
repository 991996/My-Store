import { useContext } from "react";
import { ProductsContext } from "@/contexts/ProductsContext";
import ColorfulLine from "../ColorfulLine";
import ProductsSwiper from "./ProductsSwiper";

function NewArrivalSection() {
  let { products } = useContext(ProductsContext);
  products = products.slice(0, 8);
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-gray-800 font-bold text-3xl px-4">New Arrivals</h1>
        <ColorfulLine />
      </div>

      <ProductsSwiper products={products} lgCount={6} mdCount={4} />
    </div>
  );
}

export default NewArrivalSection;
