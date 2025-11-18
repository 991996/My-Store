import background from "@/assets/images/trends-looks.png";

function TrendingLooksSection() {
  return (
    <div className="w-screen h-[90vh] bg-mist relative">
      <div
        className="absolute z-20 flex flex-col gap-2 top-20 font-bold text-gray-800
           left-45"
      >
        <p className="text-gray-500 text-xl md:text-3xl font-thin">
          Super sale
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-[66px] uppercase">
          TRENDING LOOKS
        </h1>
        <div className="flex gap-2 self-end items-center">
          <p className="text-xs md:text-sm font-bold">for only</p>
          <span className="bg-red-400 p-1 lg:p-2 text-white -rotate-6">
            $<span className="text-xl lg:text-2xl">49</span>
            .99
          </span>
        </div>
      </div>
      <img
        src={background}
        alt=""
        className="absolute right-[25%] top-1/2 -translate-y-1/2 w-[20%] object-cover"
      />
    </div>
  );
}

export default TrendingLooksSection;
