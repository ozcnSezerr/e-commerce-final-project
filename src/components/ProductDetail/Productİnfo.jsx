import ProductGallery from "./ProductGallery";
import ProductSideContent from "./ProductSideContent";

export default function Productİnfo({ product }) {
  return (
    <div className="bg-[#FAFAFA] pb-10">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto lg:gap-5 px-4 md:px-0">
        <ProductGallery images={product.images} />
        <ProductSideContent product={product} />
      </div>
    </div>
  );
}
