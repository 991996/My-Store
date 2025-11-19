import { Button } from "../ui/button";

function ProductText({ title, price }) {
  return (
    <>
      <div className="flex justify-start items-center gap-5">
        <div className="flex gap-2">
          <span>-</span>
          <p>{title}</p>
        </div>
        <p className="font-bold text-lg">${price}</p>
        <Button
          variant="link"
          className="text-blue-900 underline cursor-pointer"
        >
          Add to cart
        </Button>
      </div>
    </>
  );
}

export default ProductText;
