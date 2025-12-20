import { Link } from "react-router-dom";

export default function ShopProductCard({ product }) {
  const urlTitle = product.name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .split(/\s+/)
    .join("-");

  const detailUrl = `/product/${product.id}/${urlTitle}`;

  const productImage =
    product.images && product.images.length > 0
      ? product.images[0].url
      : "https://via.placeholder.com/300";

  return (
    <Link
      to={detailUrl}
      className="flex flex-col w-full h-full group bg-white rounded-md overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Resim*/}
      <div className="h-80 w-full overflow-hidden relative">
        <img
          src={productImage}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Bilgi Alanı */}
      <div className="flex flex-col items-center justify-center gap-y-2 py-6 px-4 text-center">
        {/* Ürün İsmi */}
        <p
          className="font-bold text-lg tracking-wide text-[#252B42] truncate w-full"
          title={product.name}
        >
          {product.name}
        </p>

        {/* Açıklama */}
        <p className="text-[#737373] font-medium tracking-wide truncate w-full px-2 text-sm">
          {product.description}
        </p>

        {/* Fiyat */}
        <div className="flex gap-2 items-center">
          <span className="text-[#BDBDBD] font-bold line-through text-sm">
            ${(product.price * 1.2).toFixed(2)}
          </span>
          <span className="text-[#23856D] font-bold text-lg">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Renkler */}
        <div className="flex gap-1 mt-1">
          <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
          <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
          <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
          <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
        </div>
      </div>
    </Link>
  );
}
