"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type slideProps = {
  slide: string[];
};
export default function Slideshow({ slide }: slideProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slide.length);
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index === currentImageIndex) return;

    setFadeIn(false);

    setTimeout(() => {
      setCurrentImageIndex(index);
      setFadeIn(true);
    }, 500);
  };

  return (
    <div className="absolute inset-0 z-0">
      {slide.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImageIndex
              ? fadeIn
                ? "opacity-100"
                : "opacity-0"
              : "opacity-0"
          }`}
          style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
        >
          <Image
            src={image || "/default.jpg"}
            alt={"Wedding photo"}
            fill
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navigation Dots */}
      <div className="absolute right-0 bottom-8 left-0 z-10 flex justify-center space-x-2">
        {slide.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "scale-110 bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
