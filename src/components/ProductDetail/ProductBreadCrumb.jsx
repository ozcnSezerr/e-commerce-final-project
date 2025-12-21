import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ProductBreadCrumb({ productName }) {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex gap-2.5 justify-start items-center text-black py-6 max-w-6xl mx-auto px-4 md:px-0">
        {/* 1. home */}
        <Link
          to="/"
          className="font-bold text-[#252B42] hover:text-blue-600 transition-colors"
        >
          Home
        </Link>

        <ChevronRight className="text-[#BDBDBD] min-w-4" />

        {/* 2. shop */}
        <Link
          to="/shop"
          className="font-bold text-[#252B42] hover:text-blue-600 transition-colors"
        >
          Shop
        </Link>

        {/* 3. ürün ismi */}
        {productName && (
          <>
            <ChevronRight className="text-[#BDBDBD] min-w-4" />
            <span className="text-[#BDBDBD] font-medium truncate max-w-[200px] md:max-w-none">
              {productName}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
