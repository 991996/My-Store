import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Heart, Handbag, Plus, Minus } from "lucide-react";
import SocialMedia from "../header/SocialMedia";

import { useState } from "react";
import ProductImageSlider from "./ProductImageSlider";
import { DialogDescription } from "@radix-ui/react-dialog";

function ProductViewDialog({ open, onOpenChange, product, handleRate }) {
  const [quantity, setQuantity] = useState(1);
  const images = [
    product.image,
    product.image,
    product.image,
    product.image,
    product.image,
    product.image,
  ];
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="hidden md:block w-full max-w-lg md:max-w-3xl lg:max-w-4xl max-h-[70vh]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          {/* image */}

          <div className="w-full flex items-center justify-center">
            <div className="w-full flex flex-col">
              <ProductImageSlider images={images} />
            </div>
          </div>

          {/* text */}
          <div className="flex flex-col gap-3 max-h-[65vh] overflow-y-auto scrollbar-custom pb-5">
            {/* title */}
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-2xl">{product?.title}</h1>
              {/* Reviews */}
              <div className="flex gap-3">
                <div className="flex gap-0">{handleRate()}</div>
                <p className="text-xs text-gray-500">
                  ( {product?.rating.count} Reviews )
                </p>
              </div>
            </div>
            {/* small line */}
            <div className="h-px w-[60px] bg-gray-300/80"></div>
            {/* Price */}
            <span className="font-[650] text-xl">
              ${product?.price}
              {Number.isInteger(product?.price) ? `.00` : ``}
            </span>
            {/* description */}
            <p className="text-gray-500">{product?.description}</p>
            {/* Category */}
            <p className="text-gray-500 text-xs uppercase">
              category:{" "}
              <span className="text-gray-800 font-semibold">
                {product?.category}
              </span>
            </p>
            <hr></hr>
            <div className="flex gap-3 items-center">
              <div className="inline-flex border border-gray-300 rounded-md overflow-hidden h-10">
                <button
                  className="px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center"
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                  }
                >
                  <Minus size={15} />
                </button>

                <input
                  type="text"
                  className="w-14 text-center border-l border-r border-gray-300 focus:outline-none"
                  value={quantity}
                  readOnly
                />

                <button
                  className="px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  <Plus size={15} />
                </button>
              </div>

              <Button className="cursor-pointer bg-blue uppercase w-[180px] py-6 rounded-none">
                <Handbag />
                add to cart
              </Button>
            </div>

            <hr></hr>
            <div className="flex items-center gap-10">
              <SocialMedia />
              <div className="flex items-center gap-1 cursor-pointer">
                <Heart size={22} />
                <p className="text-xs font-semibold uppercase">
                  add to wishlist
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductViewDialog;
