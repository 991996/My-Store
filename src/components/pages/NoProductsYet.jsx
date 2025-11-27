import { BsCartX } from "react-icons/bs";

function NoProductsYet() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-[40%] mx-auto text-center mt-20">
      <BsCartX className="text-8xl text-gray-500 mb-8" />
      <h1 className="text-3xl font-bold text-gray-800">No Products Yet..!!</h1>
      <p className="text-lg text-gray-500">
        The seller has not added products yet.
      </p>
    </div>
  );
}

export default NoProductsYet;
