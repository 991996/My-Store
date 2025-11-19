import { LiaShippingFastSolid } from "react-icons/lia";
import { BadgePercent, ShieldCheck } from "lucide-react";
import Feature from "./Feature";

function FeaturesSection() {
  const featureList = [
    {
      id: 1,
      title: "Free shipping on orders over $99",
      desc: "For more than 100,000 parts!",
      icon: <LiaShippingFastSolid size={30} />,
    },
    {
      id: 2,
      title: "Up to 40% off on selected items",
      desc: "available for all categories",
      icon: <BadgePercent size={30} />,
    },
    {
      id: 3,
      title: "100% secure payment",
      desc: "we ensure secure payment!",
      icon: <ShieldCheck size={30} />,
    },
  ];
  return (
    <>
      <div className="flex justify-center sm:justify-between">
        {featureList.map((f, index) => (
          <div
            key={f.id}
            className={`
      ${index === 1 ? "hidden sm:block" : ""}
      ${index === 2 ? "hidden md:block" : ""} 
      ${index > 2 ? "hidden lg:block" : ""} 
    `}
          >
            <Feature feature={f} />
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturesSection;
