import { Link } from "react-router-dom";

function CategoryCircle({ category }) {
  return (
    <>
      <Link
        to={`/category/${encodeURIComponent(category.JSON)}`}
        className="flex flex-col gap-2 justify-center items-center w-20 text-gray-500 hover:text-red-600 duration-300"
      >
        <img
          src={category.image}
          alt=""
          className="h-20 aspect-square rounded-full"
        />
        <p className="text-xs">{category.name}</p>
      </Link>
    </>
  );
}

export default CategoryCircle;
