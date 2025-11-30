import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function ProductImageSlider({ images }) {
  const [index, setIndex] = useState(0);
  const length = images.length;
  const interactionRef = useRef(false);
  const thumbnailsRef = useRef([]);

  useEffect(() => {
    if (thumbnailsRef.current[index]) {
      thumbnailsRef.current[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [index]);

  const goPrev = () => setIndex((p) => (p - 1 + length) % length);
  const goNext = () => setIndex((p) => (p + 1) % length);

  const [transformOrigin, setTransformOrigin] = useState("center center");

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  if (length === 0) return null;

  return (
    <div className="relative w-full">
      {/* الصورة الكبيرة */}
      <div className="relative w-full h-[48vh]">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full overflow-hidden ${
              i === index ? "z-10" : "z-0 opacity-0 pointer-events-none"
            }`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setTransformOrigin("center center")}
          >
            <img
              src={img}
              alt={`product ${i}`}
              draggable={false}
              className="w-full h-full object-contain cursor-zoom-in hover:scale-200 bg-gray-100"
              style={{
                transformOrigin: transformOrigin,
              }}
            />
          </div>
        ))}

        {/* Left arrow */}
        <div className="absolute inset-y-0 left-0 z-20 flex items-center px-2">
          <Button
            onClick={() => {
              interactionRef.current = false;
              goPrev();
            }}
            className="bg-transparent hover:bg-gray-100 text-gray-700"
          >
            <ChevronLeft />
          </Button>
        </div>

        {/* Right arrow */}
        <div className="absolute inset-y-0 right-0 z-20 flex items-center px-2">
          <Button
            onClick={() => {
              interactionRef.current = false;
              goNext();
            }}
            className="bg-transparent hover:bg-gray-100 text-gray-700"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-2 flex gap-0 justify-center">
        <Carousel>
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem className="basis-1/4" key={i}>
                <img
                  src={img}
                  ref={(el) => (thumbnailsRef.current[i] = el)}
                  alt={`thumb ${i}`}
                  className={`w-full aspect-square object-contain cursor-pointer bg-gray-100 ${
                    index === i ? "border border-gray-700" : ""
                  }`}
                  onClick={() => setIndex(i)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
