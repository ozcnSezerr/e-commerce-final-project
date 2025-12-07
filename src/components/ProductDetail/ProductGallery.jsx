import { useState } from "react";

export default function ProductGallery() {
  const images = [
    { id: 2, src: "/Gallery/gallery-2.jpg", alt: "Ürün2" },
    { id: 1, src: "/Gallery/gallery-1.jpg", alt: "Ürün1" },
  ];

  const [activeImage, setActiveImage] = useState(images[1]);

  return (
    <div className="flex flex-col gap-12 md:scale-90 lg:scale-100 ">
      {/* ---image-1-- */}
      <div className="w-90 h-[280px] md:h-110 md:w-125 relative overflow-hidden max-w-3xl mx-16 md:mx-6">
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out transform hover:scale-102"
        />
      </div>

      {/* ---images-2--- */}
      <div className="flex gap-4 overflow-x-auto pb-2 mx-16 md:mx-6">
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => setActiveImage(image)}
            className={`
              relative w-24 h-20 md:w-32 md:h-24 shrink-0 cursor-pointer overflow-hidden 
              border-none transition-all duration-200 
              ${activeImage.id === image.id ? "opacity-100" : "opacity-60"}
            `}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
