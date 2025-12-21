import { LayoutGrid, ListChecks, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSort } from "../../store/actions/productActions";

export default function ShopToolBar() {
  const dispatch = useDispatch();

  const { total, filter, sort } = useSelector((store) => store.product);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
  };

  return (
    <div className="flex justify-between md:flex-row max-w-7xl px-4 md:px-10 m-auto items-center flex-col gap-7 mt-6 text-[#737373]">
      <p className="font-bold tracking-wide">Showing all {total} results</p>

      <div className="flex gap-4 items-center">
        <p className="font-bold">Views:</p>
        <div className="border border-[#ECECEC] p-3 rounded cursor-pointer">
          <LayoutGrid className="text-[#252B42]" />
        </div>
        <div className="border border-[#ECECEC] p-3 rounded cursor-pointer">
          <ListChecks className="text-[#737373]" />
        </div>
      </div>

      <div className="flex gap-3 flex-wrap justify-center">
        {/* filter */}
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={handleFilterChange}
          className="border border-[#DDDDDD] rounded px-3 py-2 text-sm focus:outline-[#23A6F0]"
        />

        {/* order */}
        <div className="border border-[#DDDDDD] rounded px-2 flex items-center gap-1 bg-[#F9F9F9]">
          <select
            className="bg-transparent py-2 outline-none text-sm cursor-pointer"
            onChange={handleSortChange}
            value={sort}
          >
            <option value="">Sort By</option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
            <option value="rating:asc">Rating: Low to High</option>
            <option value="rating:desc">Rating: High to Low</option>
          </select>
          <ChevronDown size={16} />
        </div>

        <button className="bg-[#23A6F0] py-2 px-8 rounded text-white font-bold text-sm">
          Filter
        </button>
      </div>
    </div>
  );
}
