import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ShopProductCard({ product }) {
  // Kategorileri store'dan çekiyoruz
  const categories = useSelector((state) => state.product.categories);

  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  const category = categories.find((c) => c.id === product.category_id);
  const gender = category?.gender === "k" ? "kadin" : "erkek";
  const categoryName = category ? slugify(category.title) : "genel";
  const productNameSlug = slugify(product.name);

  const detailUrl = `/shop/${gender}/${categoryName}/${product.category_id}/${productNameSlug}/${product.id}`;

  const productImage =
    product.images && product.images.length > 0
      ? product.images[0].url
      : "https://via.placeholder.com/300";

  return (
    <Link
      to={detailUrl}
      className="flex flex-col w-full h-full group bg-white rounded-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      {/* Resim */}
      <div className="h-80 w-full overflow-hidden relative">
        <img
          src={productImage}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Bilgi Alanı */}
      <div className="flex flex-col items-center justify-center gap-y-2 py-6 px-4 text-center">
        <p
          className="font-bold text-lg tracking-wide text-[#252B42] truncate w-full"
          title={product.name}
        >
          {product.name}
        </p>

        <p className="text-[#737373] font-medium tracking-wide truncate w-full px-2 text-sm">
          {product.description}
        </p>

        <div className="flex gap-2 items-center">
          <span className="text-[#BDBDBD] font-bold line-through text-sm">
            ${(product.price * 1.2).toFixed(2)}
          </span>
          <span className="text-[#23856D] font-bold text-lg">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
}
