import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";
export default function ProductSideContent() {
  const [liked, setLiked] = useState(false);
  return (
    <div className="flex flex-col gap-2 px-20 md:px-0 sm:-ml-5 lg:ml-0 ">
      <div>
        <p className="font-medium text-xl tracking-wider mt-5">
          Floating Phone
        </p>
      </div>
      <div className="flex gap-2 mt-2">
        <div className="flex gap-1">
          <Star color="#F3CD03" fill="#F3CD03" />
          <Star color="#F3CD03" fill="#F3CD03" />
          <Star color="#F3CD03" fill="#F3CD03" />
          <Star color="#F3CD03" fill="#F3CD03" />
          <Star color="#F3CD03" />
        </div>
        <p className="flex text-[#737373] text-sm font-bold tracking-wide text-center  items-center">
          10 Reviews
        </p>
      </div>
      <div className="mt-4">
        <span className="text-2xl text-[#252B42] font-bold">$1,139.33</span>
      </div>
      <div className="flex gap-1.5">
        <span className="text-[#737373] font-bold">Availability :</span>
        <span className="text-[#23A6F0] font-bold">In Stock </span>
      </div>
      <div className="max-w-70 md:max-w-120 mt-8">
        <p>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
      </div>
      <div className="border border-[#dfdfdf] w-full max-w-70 mt-2" />

      <div className="h-7 flex gap-1.5 mt-2">
        <div className="bg-[#23A6F0] rounded-full w-7"></div>
        <div className="bg-[#2DC071] rounded-full w-7"></div>
        <div className="bg-[#E77C40] rounded-full w-7"></div>
        <div className="bg-[#252B42] rounded-full w-7"></div>
      </div>
      <div className="flex gap-5 mt-10 flex-wrap">
        <div className="bg-[#23A6F0] w-36 h-11 text-center text-white flex items-center justify-center rounded">
          Select Options
        </div>
        <div className="flex gap-2">
          <Heart
            className="border w-10 h-10 p-1.5 rounded-full border-[#E8E8E8] transition-colors duration-200"
            strokeWidth="1.3"
            fill={liked ? "red" : "none"}
            stroke={liked ? "red" : "#252B42"}
            onClick={() => setLiked(!liked)}
          />

          <ShoppingCart
            className="border w-10 h-10 p-1.5 pl-1 rounded-full border-[#E8E8E8] text-[#252B42]"
            strokeWidth="1.3"
          />
          <Eye
            className="border w-10 h-10 p-1.5 rounded-full border-[#E8E8E8] text-[#252B42]"
            strokeWidth="1.3"
          />
        </div>
      </div>
    </div>
  );
}
