import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

function CheckOutCard({ total }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>CART TOTALS</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="flex justify-between items-center pb-2">
          <h1 className="font-bold">Subtotal</h1>
          <p className="text-gray-500">${total.toFixed(2)}</p>
        </div>
        <hr className="py-2"></hr>
        <form>
          <FieldSet>
            <h1>Shipping</h1>
            <FieldGroup className="text-gray-500">
              <Field>
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Local pickup</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Flat rate</Label>
                  </div>
                </RadioGroup>
              </Field>

              <Field>
                <h1>
                  Shipping to <span className="font-bold">NY.</span>
                </h1>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">United States (US)</SelectItem>
                    <SelectItem value="dark">Turkey</SelectItem>
                    <SelectItem value="system">China</SelectItem>
                    <SelectItem value="system">Germany</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">New York</SelectItem>
                    <SelectItem value="dark">California</SelectItem>
                    <SelectItem value="system">Taxes</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  className="placeholder:text-sm"
                  placeholder="Town / City"
                />
                <Input
                  type="text"
                  className="placeholder:text-sm"
                  placeholder="ZIP"
                />
                <Button
                  type="button"
                  className="max-w-[180px] uppercase cursor-pointer tracking-wider rounded-none py-5 text-[13px]
                             bg-gray-100 text-gray-800 font-semibold hover:bg-blue hover:text-white duration-300"
                >
                  update totals
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </form>
        <hr className="my-4"></hr>
        <div className="flex justify-between items-center font-bold px-3">
          <h1>Total</h1>
          <p className="text-2xl">${total.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full uppercase cursor-pointer tracking-wider rounded-none py-6 text-[13px]
                                          bg-gray-800 text-white font-semibold hover:bg-gray-700 hover:text-white duration-300"
        >
          proceed to checkout <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CheckOutCard;
