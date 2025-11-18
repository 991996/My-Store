function CategoryCircle({ image, name }) {
  return (
    <>
      <a
        href="#"
        className="flex flex-col gap-2 justify-center items-center w-20 text-gray-500 hover:text-red-600 duration-300"
      >
        <img src={image} alt="" className="h-20 aspect-square rounded-full" />
        <p className="text-xs">{name}</p>
      </a>
    </>
  );
}

export default CategoryCircle;
