import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { FiltersContext } from "@/contexts/FiltersContext";
import { useContext } from "react";
import { Button } from "../ui/button";

function PriceAccordion() {
  const { filters, setFilters } = useContext(FiltersContext);
  return (
    <>
      <Accordion type="single" collapsible className="border p-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-gray-800 font-bold uppercase">
            Price
          </AccordionTrigger>

          <AccordionContent className="text-gray-500">
            <Slider
              value={filters.price}
              onValueChange={(value) =>
                setFilters({ ...filters, price: value })
              }
              min={0}
              max={1000}
              step={5}
              className="mt-4"
            />

            <p className="text-xs text-gray-500 mt-6 px-2">
              Price: ${filters.price[0]}, ${filters.price[1]}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default PriceAccordion;
