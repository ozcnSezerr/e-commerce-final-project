import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import SliderArrows from "./SliderArrows";
import ProductContent from "./ProductSliderContent";
import SliderProgress from "./SliderProgress";

const images = ["/SliderImg/Slider-2.png", "/SliderImg/Slider-2.png"];

const slideContents = [
  {
    title: "Vita Classic Product",
    subtitle: "SUMMER 2020",
    text: "We know how large objects will act,\n but things on a small scale.",
    buttonText: "ADD TO CART",
  },
  {
    title: "Vita Classic Product",
    subtitle: "BEST SUMMER",
    text: "We know how large objects will act,\n but things on a small scale.",
    buttonText: "ADD TO CART",
  },
];

export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 0 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const progress = ((currentSlide + 1) / images.length) * 100;

  return (
    <div className="relative w-full h-full md:h-190 overflow-hidden">
      {/* Slider Images */}
      <div ref={sliderRef} className="keen-slider w-full h-full bg-[#23856D]">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex items-center justify-center w-full h-full flex-col md:flex-row gap-8 lg:gap-16 "
          >
            <ProductContent {...slideContents[idx]} />

            <img
              src={image}
              alt={`Slide ${idx + 1}`}
              className="h-136 md:h-160 object-cover overflow-hidden self-start md:self-end"
            />
          </div>
        ))}
      </div>

      <SliderArrows instanceRef={instanceRef} />
      <SliderProgress progress={progress} />
    </div>
  );
}
