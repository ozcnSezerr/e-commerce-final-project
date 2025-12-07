import ProductGallery from "./ProductGallery";
import ProductSideContent from "./ProductSideContent";

export default function Productİnfo() {
  return (
    <div className="bg-[#FAFAFA] pb-10">
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl lg:gap-5">
        <ProductGallery />
        <ProductSideContent />
      </div>
    </div>
  );
}
