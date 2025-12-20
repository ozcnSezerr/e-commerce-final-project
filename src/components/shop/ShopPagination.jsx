import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOffset } from "../../store/actions/productActions";

export default function ShopPagination() {
  const dispatch = useDispatch();

  // Redux sayfalama
  const { total, limit, offset } = useSelector((store) => store.product);

  const totalPages = Math.ceil(total / limit);

  const currentPage = Math.floor(offset / limit) + 1;

  const handlePageChange = (pageNum) => {
    const newOffset = (pageNum - 1) * limit;

    dispatch(setOffset(newOffset));
  };

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <div
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-5 py-4 cursor-pointer border-r border-[#BDBDBD] last:border-r-0
                ${
                  currentPage === i
                    ? "bg-[#23A6F0] text-white"
                    : "hover:bg-gray-50 text-[#23A6F0] bg-white"
                }`}
          >
            {i}
          </div>
        );
      }
    }
    return pages;
  };

  if (total === 0) return null;

  return (
    <div className="flex items-center justify-center font-bold text-sm text-[#737373] mt-6 select-none">
      <div className="flex items-center bg-white border border-[#BDBDBD] rounded-lg shadow-sm overflow-hidden">
        {/* first */}
        <div
          onClick={() => handlePageChange(1)}
          className={`px-6 py-4 border-r border-[#BDBDBD] cursor-pointer 
            ${
              currentPage === 1
                ? "bg-[#F3F3F3] text-[#BDBDBD] pointer-events-none"
                : "hover:bg-gray-50 text-[#23A6F0]"
            }`}
        >
          First
        </div>

        {renderPageNumbers()}

        {/* next */}
        <div
          onClick={() =>
            currentPage < totalPages && handlePageChange(currentPage + 1)
          }
          className={`px-6 py-4 border-l border-[#BDBDBD] cursor-pointer
             ${
               currentPage === totalPages
                 ? "bg-[#F3F3F3] text-[#BDBDBD] pointer-events-none"
                 : "hover:bg-gray-50 text-[#23A6F0]"
             }`}
        >
          Next
        </div>
      </div>
    </div>
  );
}
