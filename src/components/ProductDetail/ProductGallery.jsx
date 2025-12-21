import { useState, useEffect } from "react";

export default function ProductGallery({ images }) {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (images && images.length > 0) {
      // İndex sırasına göre sıralama
      const sorted = [...images].sort((a, b) => a.index - b.index);
      setActiveImage(sorted[0]);
    }
  }, [images]);

  if (!images || images.length === 0 || !activeImage) {
    return (
      <div className="flex-1 flex justify-center items-center h-[400px]">
        Loading Images...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 flex-1">
      {/* BÜYÜK RESİM */}
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-lg shadow-sm">
        <img
          src={activeImage.url}
          alt="Active Product"
          className="w-full h-full object-cover object-top transition-all duration-500 hover:scale-110"
        />
      </div>

      {/* KÜÇÜK RESİMLER */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {images.map((image, i) => (
          <div
            key={i}
            onClick={() => setActiveImage(image)}
            className={`
              relative w-24 h-24 shrink-0 cursor-pointer overflow-hidden rounded-md border-2
              transition-all duration-200 
              ${
                activeImage.url === image.url
                  ? "border-[#23A6F0] opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              }
            `}
          >
            <img
              src={image.url}
              alt={`thumbnail-${i}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
