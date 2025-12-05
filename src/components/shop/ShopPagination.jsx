import React from "react";

export default function ShopPagination() {
  return (
    <div className="flex items-center justify-center font-bold text-sm text-[#737373] mt-6">
      <div className="flex items-center bg-white border border-[#BDBDBD] rounded-lg shadow-sm overflow-hidden divide-x divide-[#BDBDBD]">
        <div className="px-6 py-4 bg-[#F3F3F3] text-[#BDBDBD] cursor-pointer">
          First
        </div>
        {/* page 1 */}
        <div className="px-5 py-4 hover:bg-gray-50 text-[#23A6F0] cursor-pointer">
          1
        </div>
        {/* page 2 */}
        <div className="px-5 py-4 bg-[#23A6F0] text-white cursor-pointer">
          2
        </div>
        {/* page 3 */}
        <div className="px-5 py-4 hover:bg-gray-50 text-[#23A6F0] cursor-pointer">
          3
        </div>

        <div className="px-6 py-4 hover:bg-gray-50 text-[#23A6F0] cursor-pointer">
          Next
        </div>
      </div>
    </div>
  );
}
