import React from "react";
import { useSelector } from "react-redux";
import ShopBoxs from "./ShopBoxs";

export default function ShopCategories() {
  // redux kategoriler
  const categories = useSelector((store) => store.product.categories);

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <section className="py-12 bg-[#FAFAFA]">
      <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto px-4">
        {topCategories.map((item) => (
          <ShopBoxs key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
