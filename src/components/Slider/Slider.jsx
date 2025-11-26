import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const images = ["/SliderImg/Slider-1.jpg", "/SliderImg/Slider-1.jpg"];

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
          </div>
        ))}
      </div>
    </div>
  );
}
