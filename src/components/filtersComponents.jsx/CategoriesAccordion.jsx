import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductsContext } from "@/contexts/ProductsContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function CategoriesAccordion() {
  const { products } = useContext(ProductsContext);
  const [categorySelected, setCategorySelected] = useState(null);

  const categories = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="border p-2"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-gray-800 font-semibold uppercase">
            Categories
          </AccordionTrigger>
          {Object.entries(categories).map(([category, count]) => {
            return (
              <AccordionContent key={category}>
                <Link
                  to={`/category/${encodeURIComponent(category)}`}
                  key={category}
                  className={`hover:text-gray-800 duration-300 cursor-pointer ${
                    category === categorySelected
                      ? "text-gray-800"
                      : "text-gray-500"
                  }`}
                  onClick={() => setCategorySelected(category)}
                >
                  {category} ({count})
                </Link>
              </AccordionContent>
            );
          })}
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default CategoriesAccordion;
