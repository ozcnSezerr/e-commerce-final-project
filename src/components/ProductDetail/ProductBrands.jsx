export default function ProductBrands() {
  const logos = [
    { id: 1, src: "/Brands/logo-1.png", alt: "Hooli" },
    { id: 2, src: "/Brands/logo-2.png", alt: "Lyft" },
    { id: 3, src: "/Brands/logo-3.png", alt: "Pied Piper" },
    { id: 4, src: "/Brands/logo-4.png", alt: "Stripe" },
    { id: 5, src: "/Brands/logo-5.png", alt: "AWS" },
    { id: 6, src: "/Brands/logo-6.png", alt: "Reddit" },
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="w-full md:w-1/2 lg:w-1/6 flex justify-center mb-12 lg:mb-0 px-4"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-15 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
