import { FaStar, FaStarHalf } from "react-icons/fa";
import { Button } from "../ui/button";

function ProductCard2({ product }) {
  const isInteger = Number.isInteger(product.price);

  function handleRate() {
    const rate = Math.round(product.rating.rate * 2) / 2;
    const stars = [];
    for (let i = 0; i < Math.floor(rate); i++) {
      stars.push(<FaStar key={i} size={15} className="text-yellow-400" />);
    }
    if (rate % 1 !== 0) {
      stars.push(
        <FaStarHalf key="half" size={15} className="text-yellow-400" />
      );
    }

    return stars;
  }
  return (
    <>
      <div className="flex flex-col gap-3 text-gray-800">
        <div className="p-5">
          <img
            src={product.image}
            alt="Product Image"
            className=" object-contain w-full aspect-square"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs text-gray-400">{product.category}</p>

          <h1 className="text-sm line-clamp-2">{product.title}</h1>
          <div className="flex gap-0">{handleRate()}</div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-400 line-through decoration-1">
            ${product.price}
            {isInteger ? `.00` : ``}
          </span>
          <span className="font-semibold text-lg">
            ${product.price}
            {isInteger ? `.00` : ``}
          </span>
        </div>
        <Button className="bg-blue rounded-none cursor-pointer">
          Add to cart
        </Button>
      </div>
    </>
  );
}

export default ProductCard2;
