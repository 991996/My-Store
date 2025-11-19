function Dot({ classes }) {
  return (
    <>
      <div
        className={`w-5 aspect-square rounded-full bg-red-600 flex justify-center items-center
   absolute ${classes}`}
      >
        <div className="w-2 aspect-square rounded-full bg-white"></div>
      </div>
    </>
  );
}

export default Dot;
