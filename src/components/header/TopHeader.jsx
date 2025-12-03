import SocialMedia from "./SocialMedia";
import { LiaShippingFastSolid } from "react-icons/lia";
import ReactCountryFlag from "react-country-flag";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

function TopHeader() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="hidden lg:flex gap-2 items-center">
          <LiaShippingFastSolid size={22} />
          <p className="font-bold text-gray-700 text-xs">
            FREE Express Shipping On Orders $99+
          </p>
        </div>
        <div className="flex gap-5 justify-between items-center w-full lg:w-fit">
          <Select>
            <SelectTrigger className="w-[120px] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ReactCountryFlag
                  countryCode="US"
                  svg
                  style={{ width: "1.2em", height: "1.2em" }}
                />
                <SelectValue placeholder="English" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Language</SelectLabel>
                <SelectItem value="en">
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    style={{ width: "1.5em", height: "1.5em" }}
                  />
                  English
                </SelectItem>
                <SelectItem value="ar">
                  <ReactCountryFlag
                    countryCode="SA"
                    svg
                    style={{ width: "1.5em", height: "1.5em" }}
                  />
                  العربية
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Link to="/contact-us" className="hidden lg:block">
            <p className="text-xs text-gray-500">Contact us</p>
          </Link>

          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default TopHeader;
