import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import SliderContent from "./SliderContent";

const images = ["/SliderImg/Slider-1.jpg", "/SliderImg/Slider-1.jpg"];

const slideContents = [
  {
    title: "NEW COLLECTION",
    subtitle: "SUMMER 2020",
    text: "We know how large objects will act,\n but things on a small scale.",
    buttonText: "SHOP NOW",
  },
  {
    title: "NEW COLLECTION",
    subtitle: "BEST SUMMER",
    text: "We know how large objects will act,\n but things on a small scale.",
    buttonText: "DISCOVER",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 0 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="relative w-full h-220 md:h-190 overflow-hidden">
      {/* Slider Images */}
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex items-center justify-center w-full h-full"
          >
            <img
              src={image}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />

            <SliderContent {...slideContents[idx]} />
          </div>
        ))}
      </div>
    </div>
  );
}
