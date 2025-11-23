import { Heart } from "lucide-react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useState } from "react";

function ProductCard({ product }) {
  const isInteger = Number.isInteger(product.price);
  const [hoverImage, setHoverImage] = useState(false);

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
        <div
          className=" relative cursor-pointer aspect-square"
          onMouseEnter={() => setHoverImage(true)}
          onMouseLeave={() => setHoverImage(false)}
        >
          <img
            src={product.image}
            alt="Product Image"
            className=" object-contain w-full aspect-square"
          />
          <div
            className={`${
              hoverImage ? "opacity-100" : "opacity-0"
            } absolute h-[20%] bottom-0 w-full bg-mustard flex justify-center items-center
          text-gray-600 text-[17px] duration-300`}
          >
            Quick view
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <p className="text-xs text-gray-400">{product.category}</p>
            <button className="cursor-pointer">
              <Heart size={20} />
            </button>
          </div>

          <h1 className="text-[15px]">{product.title}</h1>
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
      </div>
    </>
  );
}

export default ProductCard;
