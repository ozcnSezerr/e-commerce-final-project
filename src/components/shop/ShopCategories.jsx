import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../store/actions/productActions";
import { ChevronRight } from "lucide-react";

const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};

export default function ShopCategories() {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.product.categories);
  const fetchState = useSelector((store) => store.product.fetchState);

  useEffect(() => {
    // Kategoriler henüz yüklenmediyse çek
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="bg-[#FAFAFA] pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Kategori Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {topCategories.map((cat) => {
            const gender = cat.code.includes("k:") ? "kadin" : "erkek";

            // Slug oluştur
            const slug = createSlug(cat.title);

            return (
              <Link
                key={cat.id}
                to={`/shop/${gender}/${slug}/${cat.id}`}
                className="relative group overflow-hidden w-full h-64 md:h-56 cursor-pointer"
              >
                {/* Resim */}
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/40" />

                {/* Yazılar */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="font-bold text-base uppercase tracking-wide">
                    {cat.title}
                  </h3>
                  <p className="text-sm font-medium mt-1">
                    {cat.rating} Rating
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
