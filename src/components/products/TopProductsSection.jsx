import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductsContext } from "@/contexts/ProductsContext";
import ColorfulLine from "../ColorfulLine";
import ProductsSwiper from "./ProductsSwiper";

function TopProductsSection() {
  let { products } = useContext(ProductsContext);
  products = products.filter((p) => p.rating.rate > 4);
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-gray-800 font-bold text-3xl px-4">Top products</h1>
        <ColorfulLine />
      </div>

      <ProductsSwiper products={products} lgCount={4} mdCount={3} />
    </div>
  );
}

export default TopProductsSection;
