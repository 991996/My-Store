import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const sizes = ["XXL", "XL", "L", "M", "S", "XS"];

function SizeAccordion() {
  const [size, setSize] = useState(null);
  return (
    <>
      <Accordion type="single" collapsible className="border p-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-gray-800 font-bold uppercase">
            Size
          </AccordionTrigger>

          <AccordionContent>
            {sizes.map((s, index) => {
              return (
                <button
                  key={index}
                  className={`w-[30px] aspect-square mx-1 cursor-pointer border border-gray-200
                     hover:bg-blue hover:text-gray-100 text-xs duration-300
                      ${
                        s === size ? "bg-blue text-gray-100" : "text-gray-500"
                      }`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default SizeAccordion;
