import background from "@/assets/images/big-sale.jpg";
import MyButton from "./MyButton";
import { Button } from "./ui/button";
function BigSaleBar() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className=" relative flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between items-center text-white py-5 px-5 lg:px-10"
      >
        {/* overlay */}
        <div className=" absolute inset-0 w-full h-full bg-blue/60"></div>
        <div className="flex gap-3 z-10 items-start">
          <span
            className="mt-3 md:mt-2 lg:mt-1 text-sm md:text-base lg:text-lg uppercase py-1 px-3 font-bold bg-black -rotate-8 whitespace-nowrap
"
          >
            Big Sale
          </span>
          <div className="flex flex-wrap gap-3 items-center">
            <h1 className="text-[15px] md:text-lg uppercase lg:text-xl font-bold wrap-break-word">
              All new fashion brands items up to 70% off
            </h1>
            <p className="text-sm text-gray-300">Online Purchases Only</p>
          </div>
        </div>
        <div className="z-10">
          <MyButton color="white" text="View sale" textColor="black" />
        </div>
      </div>
    </>
  );
}

export default BigSaleBar;
