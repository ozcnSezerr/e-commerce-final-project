import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SliderArrows({ instanceRef }) {
  return (
    <>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white z-10"
        onClick={() => instanceRef.current?.prev()}
      >
        <ChevronLeft className="w-12 h-12" />
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white z-10"
        onClick={() => instanceRef.current?.next()}
      >
        <ChevronRight className="w-12 h-12" />
      </button>
    </>
  );
}
