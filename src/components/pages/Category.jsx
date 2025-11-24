import { useContext } from "react";
import CategoriesAccordion from "../filtersComponents.jsx/CategoriesAccordion";
import ColorAccordion from "../filtersComponents.jsx/ColorAccordion";
import PriceAccordion from "../filtersComponents.jsx/PriceAccordion";
import SizeAccordion from "../filtersComponents.jsx/SizeAccordion";
import { ProductsContext } from "@/contexts/ProductsContext";
import ProductCard from "../products/ProductCard";
import { useParams } from "react-router-dom";

function Category() {
  const products = useContext(ProductsContext);
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const filteredProducts = products.filter((p) => p.category === decodedName);
  return (
    <>
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-4">
        <div className="flex flex-col">
          <CategoriesAccordion />
          <PriceAccordion />
          <ColorAccordion />
          <SizeAccordion />
        </div>
        <div className="grid grid-cols-3 gap-5 px-5 col-span-3">
          {filteredProducts.map((p) => {
            return <ProductCard key={p.id} product={p} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Category;
