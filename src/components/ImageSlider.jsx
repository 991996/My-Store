import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";

export default function ImageSlider({
  images = [],
  autoPlay = true,
  delay = 6000,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const length = images.length;
  const timerRef = useRef(null);
  const interactionRef = useRef(false); // true while user interacts (drag / mouse)

  const goPrev = () => setIndex((p) => (p - 1 + length) % length);
  const goNext = () => setIndex((p) => (p + 1) % length);

  // Auto-play
  useEffect(() => {
    if (!autoPlay || length <= 1 || interactionRef.current) return;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(goNext, delay);
    return () => clearTimeout(timerRef.current);
  }, [index, autoPlay, delay, length]);

  // Swipe handlers (trackMouse enables mouse drag)
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      clearTimeout(timerRef.current);
      goNext();
      interactionRef.current = false;
    },
    onSwipedRight: () => {
      clearTimeout(timerRef.current);
      goPrev();
      interactionRef.current = false;
    },
    onSwiping: () => {
      // user is interacting — pause autoplay
      interactionRef.current = true;
      clearTimeout(timerRef.current);
    },
    onTap: () => {
      // optional: resume after quick tap
      interactionRef.current = false;
    },
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
    delta: 50, // threshold px
  });

  if (length === 0) return null;

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="relative h-[75vh]">
        {/* الصور */}
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt ?? `slide-${i}`}
            draggable={false} // يمنع سحب الصورة الافتراضي
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}

        {/* Overlay شفاف لالتقاط السحب (فوق الصور، تحت الكابتشن والأزرار) */}
        <div
          {...handlers}
          // z-10 so caption (z-20) and arrows (z-30) remain clickable above this overlay
          className="absolute inset-0 z-10"
          style={{ touchAction: "pan-y", cursor: "grab" }}
          // accessibility: allow pointer events (it's the catcher). No onMouseDown here because useSwipeable handles.
        />

        {/* Caption (above overlay) */}
        <div
          className={`absolute z-20 flex flex-col gap-2 top-1/2 -translate-y-1/2 font-bold text-gray-800
            ${index % 2 === 0 ? "left-1/6" : "right-1/6"}`}
        >
          <p className="text-gray-500 text-lg md:text-xl">
            {images[index].caption?.p}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase">
            {images[index].caption?.h1}
          </h1>
          <div className="flex gap-2 self-end items-center">
            <p className="uppercase text-xs md:text-sm">starting at</p>
            <span className="bg-red-400 p-1 lg:p-2 text-white -rotate-6">
              $
              <span className="text-xl lg:text-2xl">
                {images[index].caption?.price}
              </span>
              .99
            </span>
          </div>

          <Button
            className={`uppercase cursor-pointer font-bold rounded-none w-[150px] md:w-[180px] lg:w-[200px] py-5 md:py-6 lg:py-7 
              text-sm md:text-base lg:text-[17px] bg-${images[index].buttonColor}`}
          >
            Shop Now!
          </Button>
        </div>

        {/* Left arrow (above overlay) */}
        <div className="absolute inset-y-0 left-0 z-30 flex items-center px-2">
          <Button
            onClick={() => {
              clearTimeout(timerRef.current);
              interactionRef.current = false;
              goPrev();
            }}
            className="bg-transparent hover:bg-transparent text-gray-700 cursor-pointer"
          >
            <ChevronLeft />
          </Button>
        </div>

        {/* Right arrow (above overlay) */}
        <div className="absolute inset-y-0 right-0 z-30 flex items-center px-2">
          <Button
            onClick={() => {
              clearTimeout(timerRef.current);
              interactionRef.current = false;
              goNext();
            }}
            className="bg-transparent hover:bg-transparent text-gray-700 cursor-pointer"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
