import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
export default function ShopHeader() {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col py-8 px-8 max-w-7xl mx-auto gap-y-16 text-center md:text-left md:flex-row md:justify-between">
        <p className="font-bold text-2xl">Shop</p>
        {/*---breadcrumb--- */}
        <div className="flex gap-2 text-sm justify-center font-semibold">
          <Link to="/">Home</Link>
          <ChevronRight className="text-[#BDBDBD]" />
          <p className="text-[#BDBDBD]">Shop</p>
        </div>
      </div>
    </div>
  );
}
