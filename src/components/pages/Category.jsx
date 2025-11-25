import { useContext, useMemo, useState } from "react";
import CategoriesAccordion from "../filtersComponents.jsx/CategoriesAccordion";
import ColorAccordion from "../filtersComponents.jsx/ColorAccordion";
import PriceAccordion from "../filtersComponents.jsx/PriceAccordion";
import SizeAccordion from "../filtersComponents.jsx/SizeAccordion";
import { ProductsContext } from "@/contexts/ProductsContext";
import ProductCard from "../products/ProductCard";
import { useParams } from "react-router-dom";
import ShowSelect from "../filtersComponents.jsx/ShowSelect";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FiltersContext } from "@/contexts/FiltersContext";

function Category() {
  const products = useContext(ProductsContext);
  const [filters, setFilters] = useState({
    price: [0, 1000],
    color: null,
    size: null,
    sort: "newest",
    show: "12",
  });
  // Category`s name
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  // const filteredProducts = products.filter((p) => p.category === decodedName);
  const filteredProducts = useMemo(() => {
    // filter by category
    let finalList = products.filter((p) => {
      return (
        p.category === decodedName &&
        p.price >= filters.price[0] &&
        p.price <= filters.price[1]
      );
    });

    switch (filters.sort) {
      case "rating":
        finalList = finalList.sort((a, b) => b.rating.rate - a.rating.rate);
        break;

      case "low-high":
        finalList = finalList.sort((a, b) => a.price - b.price);
        break;

      case "high-low":
        finalList = finalList.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }
    return finalList.slice(0, filters.show);
  }, [products, decodedName, filters]);

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-4">
        <div className="flex flex-col">
          <CategoriesAccordion />
          <PriceAccordion />
          <ColorAccordion />
          <SizeAccordion />
        </div>
        <div className="flex flex-col gap-4 px-5 col-span-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-500">
              <p className="text-sm">Sort by:</p>
              <Select
                onValueChange={(value) =>
                  setFilters({ ...filters, sort: value })
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Default sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="low-high">Price: Low to High</SelectItem>
                  <SelectItem value="high-low">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <ShowSelect />
          </div>
          <div className="grid grid-cols-3 gap-5">
            {filteredProducts.map((p) => {
              return <ProductCard key={p.id} product={p} />;
            })}
          </div>
          <div className="flex justify-between items-center w-full">
            <ShowSelect />
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </FiltersContext.Provider>
  );
}

export default Category;
