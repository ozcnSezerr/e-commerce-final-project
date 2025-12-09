import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
export default function ProductBreadCrumb() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex gap-2.5 justify-start items-center text-black py-10 max-w-6xl mx-auto pl-16 md:pl-6 md:scale-95 lg:scale-100">
        <Link to="/" className="font-semibold">
          Home
        </Link>
        <ChevronRight className="text-[#BDBDBD]" />
        <Link to="/shop" className="text-[#BDBDBD]">
          Shop
        </Link>
      </div>
    </div>
  );
}
