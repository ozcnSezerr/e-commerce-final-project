export default function ProductListCard({ product }) {
  return (
    <div className="flex flex-col h-auto bg-white ">
      <div className="mx-auto">
        <img
          src={product.image}
          alt={`Product ${product.id}`}
          className="w-85 h-105 sm:w-60 sm:h-70 object-center object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-y-2 py-4 px-3 h-40">
        <p className="font-bold text-lg tracking-wide pt-8">Graphic Design</p>
        <p className="text-[#737373] font-medium tracking-wide">
          English Department
        </p>
        <div className="flex gap-1">
          <span className="text-[#BDBDBD] font-bold">$16.48</span>
          <span className="text-[#23856D] font-bold">$6.48</span>
        </div>

        <div className="flex gap-1 mt-1 pb-8">
          <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
          <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
          <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
          <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
        </div>
      </div>
    </div>
  );
}
