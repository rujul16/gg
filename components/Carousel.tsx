"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import "./Carousel.css"; // Import your CSS file

// Define the types for the slides and props
interface Slide {
  url: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel = ({ slides }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Inline style for background image of the current slide
  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLast = currentIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      goToNext();
      console.log("next");
    }, 2000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <Button className={`arrow arrow-left`} onClick={goToPrevious}>
        {"<"}
      </Button>
      <Button className={`arrow arrow-right`} onClick={goToNext}>
        {">"}
      </Button>
      <div className="slide" style={slideStyle}></div>
      <div className="flex justify-center gap-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="hover:cursor-pointer"
            onClick={() => goToSlide(slideIndex)}
          >
            ⬤
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
