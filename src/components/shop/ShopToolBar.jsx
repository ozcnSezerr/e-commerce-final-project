import { LayoutGrid, ListChecks, ChevronDown } from "lucide-react";

export default function ShopToolBar() {
  return (
    <div className="flex justify-between md:flex-row max-w-7xl px-10 m-auto items-center flex-col gap-7 mt-6 text-[#737373]">
      {/* --start-- */}
      <p className="font-bold tracking-wide">Showing all 12 results</p>
      {/* --middle--  */}
      <div className="flex gap-4 items-center">
        <p className="font-bold">Views:</p>
        <div className="border border-[#ECECEC] p-3 rounded">
          <LayoutGrid className="text-[#252B42]" />
        </div>
        <div className="border border-[#ECECEC] p-3 rounded">
          <ListChecks className="text-[#737373]" />
        </div>
      </div>
      {/* --end-- */}
      <div className="flex gap-3">
        <div className="border border-[#DDDDDD] rounded px-4 flex items-center gap-1 bg-[#F9F9F9]">
          <p>Popularity</p>
          <ChevronDown />
        </div>
        <button className="bg-[#23A6F0] py-3 px-8 rounded-sm text-white">
          Filter
        </button>
      </div>
    </div>
  );
}
