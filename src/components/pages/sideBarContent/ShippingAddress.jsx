import { Truck } from "lucide-react";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ShippingAddress() {
  return (
    <div className="flex flex-col gap-5 md:gap-8">
      <div className="flex gap-2 items-center">
        <Truck size={30} className="text-gray-400" />
        <h1 className="font-bold text-[22px]">Shipping Address</h1>
      </div>
      <form className="max-w-4xl text-gray-500">
        <FieldSet>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel>
                  First name<span className="text-red-600 text-xl"> *</span>
                </FieldLabel>
                <Input type="text" autoComplete="off" />
              </Field>
              <Field>
                <FieldLabel>
                  Last name<span className="text-red-600 text-xl"> *</span>
                </FieldLabel>
                <Input type="text" autoComplete="off" />
              </Field>
            </div>
            <Field>
              <FieldLabel>Company</FieldLabel>
              <Input type="text" autoComplete="off" />
            </Field>
            <Field>
              <FieldLabel>
                Country / Region<span className="text-red-600 text-xl">*</span>
              </FieldLabel>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="qatar">Qatar</SelectItem>
                  <SelectItem value="saudi">Saudi Arabia</SelectItem>
                  <SelectItem value="uae">United Arab Emirates</SelectItem>
                  <SelectItem value="kuwait">Kuwait</SelectItem>
                  <SelectItem value="oman">Oman</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel>
                Street address<span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <Input
                type="text"
                autoComplete="off"
                placeholder="House number and street name"
                className="placeholder:text-[13px] placeholder:text-gray-400"
              />
              <Input
                type="text"
                autoComplete="off"
                placeholder="Apartment, suite, unit, etc. (optional)"
                className="placeholder:text-[13px] placeholder:text-gray-400"
              />
            </Field>
            <Field>
              <FieldLabel>
                Town / City<span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <Input type="text" autoComplete="off" />
            </Field>
            <Field>
              <FieldLabel>
                State / Country<span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <Input type="text" autoComplete="off" />
            </Field>
            <Field>
              <FieldLabel>
                Postcode / ZIP<span className="text-red-600 text-xl"> *</span>
              </FieldLabel>
              <Input type="text" autoComplete="off" />
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
}

export default ShippingAddress;
