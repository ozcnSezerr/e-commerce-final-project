import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/shoppingCartActions";

export default function ProductSideContent({ product }) {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  // Sepete ekleme fonksiyonu
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) return null;

  return (
    <div className="flex flex-col gap-4 px-4 md:px-0 flex-1">
      <div>
        <h4 className="font-medium text-xl tracking-wider mt-5">
          {product.name}
        </h4>
      </div>

      <div className="flex gap-2 mt-2 items-center">
        <div className="flex gap-1">
          <Star className="text-[#F3CD03] fill-[#F3CD03]" size={20} />
          <Star className="text-[#F3CD03] fill-[#F3CD03]" size={20} />
          <Star className="text-[#F3CD03] fill-[#F3CD03]" size={20} />
          <Star className="text-[#F3CD03] fill-[#F3CD03]" size={20} />
          <Star className="text-[#F3CD03]" size={20} />
        </div>
        <p className="text-[#737373] text-sm font-bold tracking-wide ml-2">
          {product.rating} Rating • {product.sell_count} Sold
        </p>
      </div>

      <div className="mt-2">
        <span className="text-2xl text-[#252B42] font-bold">
          $ {product.price}
        </span>
      </div>

      <div className="flex gap-1.5">
        <span className="text-[#737373] font-bold">Availability :</span>
        <span className="text-[#23A6F0] font-bold">
          {product.stock > 0 ? "In Stock" : "Out of Stock"} ({product.stock})
        </span>
      </div>

      <div className="max-w-xl mt-4 text-[#858585]">
        <p>{product.description}</p>
      </div>

      <div className="border-b border-[#dfdfdf] w-full my-4" />

      <div className="flex gap-1.5 mt-2">
        <div className="bg-[#23A6F0] rounded-full w-7 h-7 cursor-pointer hover:scale-110 transition-transform"></div>
        <div className="bg-[#2DC071] rounded-full w-7 h-7 cursor-pointer hover:scale-110 transition-transform"></div>
        <div className="bg-[#E77C40] rounded-full w-7 h-7 cursor-pointer hover:scale-110 transition-transform"></div>
        <div className="bg-[#252B42] rounded-full w-7 h-7 cursor-pointer hover:scale-110 transition-transform"></div>
      </div>
      {/* ------------------------------------- */}

      <div className="flex gap-4 mt-8 flex-wrap">
        <button
          onClick={handleAddToCart}
          className="bg-[#23A6F0] px-8 py-3 text-white font-bold rounded hover:bg-[#1a8bc4] transition"
        >
          Add to Cart
        </button>

        <div className="flex gap-2 items-center">
          <button
            onClick={() => setLiked(!liked)}
            className="border p-3 rounded-full hover:bg-gray-50 transition flex items-center justify-center w-10 h-10"
          >
            <Heart
              size={20}
              className={liked ? "fill-red-500 text-red-500" : "text-[#252B42]"}
            />
          </button>

          <button
            onClick={handleAddToCart}
            className="border p-3 rounded-full hover:bg-gray-50 transition flex items-center justify-center w-10 h-10"
          >
            <ShoppingCart size={20} className="text-[#252B42]" />
          </button>

          <button className="border p-3 rounded-full hover:bg-gray-50 transition flex items-center justify-center w-10 h-10">
            <Eye size={20} className="text-[#252B42]" />
          </button>
        </div>
      </div>
    </div>
  );
}
