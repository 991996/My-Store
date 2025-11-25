import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FiltersContext } from "@/contexts/FiltersContext";
import { useContext } from "react";

const colors = [
  { name: "Red", value: "#ef4444" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Green", value: "#22c55e" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff", border: true },
];

function ColorAccordion() {
  // const [color, setColor] = useState(null);
  const { filters, setFilters } = useContext(FiltersContext);
  return (
    <>
      <Accordion type="single" collapsible className="border p-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-gray-800 font-bold uppercase">
            Color
          </AccordionTrigger>

          <AccordionContent>
            {colors.map((c) => {
              return (
                <button
                  key={c.name}
                  className={` aspect-square rounded-full mx-1 cursor-pointer
                    ${c.border ? "border-2" : ""}
                    ${
                      c.name === filters.color
                        ? "border-2 border-gray-500 w-10"
                        : "w-[30px]"
                    }`}
                  style={{ backgroundColor: c.value }}
                  onClick={() => setFilters({ ...filters, color: c.name })}
                ></button>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default ColorAccordion;
