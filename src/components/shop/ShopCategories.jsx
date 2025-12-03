import React from "react";
import ShopBoxs from "./ShopBoxs";

const categories = [
  {
    id: 1,
    title: "clothes",
    image: "ShopCategory/category-1.jpg",
    text: "5 Items",
  },
  {
    id: 2,
    title: "clothes",
    image: "ShopCategory/category-2.jpg",
    text: "5 Items",
  },
  {
    id: 3,
    title: "clothes",
    image: "ShopCategory/category-3.jpg",
    text: "5 Items",
  },
  {
    id: 4,
    title: "clothes",
    image: "ShopCategory/category-4.jpg",
    text: "5 Items",
  },
  {
    id: 5,
    title: "clothes",
    image: "ShopCategory/category-5.jpg",
    text: "5 Items",
  },
];

export default function ShopCategories() {
  return (
    <section className="py-8">
      <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
        {categories.map(({ id, title, image, text }) => {
          return <ShopBoxs title={title} key={id} image={image} text={text} />;
        })}
      </div>
    </section>
  );
}
