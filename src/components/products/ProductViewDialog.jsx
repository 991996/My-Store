import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { DialogDescription } from "@radix-ui/react-dialog";
import ProductInfo from "./ProductInfo";

function ProductViewDialog({ open, onOpenChange, product }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="hidden md:block w-full max-w-lg md:max-w-3xl lg:max-w-4xl max-h-[70vh]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ProductInfo
          product={product}
          className="max-h-[65vh] overflow-y-auto scrollbar-custom"
        />
      </DialogContent>
    </Dialog>
  );
}

export default ProductViewDialog;
