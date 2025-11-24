import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Button } from "../ui/button";

function PriceAccordion() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  return (
    <>
      <Accordion type="single" collapsible className="border p-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-gray-800 font-bold uppercase">
            Price
          </AccordionTrigger>

          <AccordionContent className="text-gray-500">
            <Slider
              value={priceRange}
              onValueChange={(value) => setPriceRange(value)}
              min={0}
              max={1000}
              step={5}
              className="mt-4"
            />
            <div className="flex justify-between items-center mt-6 px-2">
              <p className="text-xs text-gray-500">
                Price: ${priceRange[0]}, ${priceRange[1]}
              </p>
              <Button>Filter</Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default PriceAccordion;
