import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

function Addresses() {
  return (
    <div className="flex flex-col gap-5 md:gap-8">
      <div className="flex gap-2 items-center">
        <MapPin size={30} className="text-gray-400" />
        <h1 className="font-bold text-[22px]">Addresses</h1>
      </div>
      <p className="text-gray-500 text-sm">
        The following addresses will be used on the checkout page by default.
      </p>
      <div className="flex flex-col md:flex-row gap-10 md:gap-30">
        {/* Billing address */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-lg">Billing address</h1>

          <p className="text-gray-500 text-sm">
            You have not set up this type of address yet.
          </p>

          <Link to="../shipping-address" className="mt-5">
            <Button
              className="flex items-center justify-center uppercase cursor-pointer tracking-wider rounded-none py-5 text-[13px]
                     bg-gray-100 text-gray-800 font-semibold hover:bg-blue hover:text-white duration-300"
            >
              add address
            </Button>
          </Link>
        </div>
        {/* shipping address */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-lg">Shipping address</h1>

          <p className="text-gray-500 text-sm">
            You have not set up this type of address yet.
          </p>

          <Link to="../shipping-address" className="mt-5">
            <Button
              className="flex items-center justify-center uppercase cursor-pointer tracking-wider rounded-none py-5 text-[13px]
                     bg-gray-100 text-gray-800 font-semibold hover:bg-blue hover:text-white duration-300"
            >
              add address
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Addresses;
