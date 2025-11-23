import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

function SubscribeSection() {
  return (
    <>
      <div className="flex flex-col gap-8 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-0 text-center">
          <h1 className="text-lg font-bold">Get Special Offers and Savings</h1>
          <p className="text-sm text-gray-400">
            Get all the latest information on Events, Sales and Offers.
          </p>
        </div>

        {/* Email input */}
        <div className="relative flex gap-3 justify-center items-center">
          <Button
            className=" absolute text-white right-2 bg-blue rounded-none px-5 mb-2"
            size="icon-sm"
          >
            ok
          </Button>
          <Mail className=" absolute left-2 text-gray-500" />
          <Input
            type="text"
            placeholder="Enter Your E-mail Address..."
            className=" border-0 border-b shadow-none rounded-none pl-10
          focus-visible:ring-0 focus-visible:border-gray-400 text-xs"
          />
        </div>
      </div>
    </>
  );
}

export default SubscribeSection;
