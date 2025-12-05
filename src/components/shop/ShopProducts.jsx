import ShopPagination from "./ShopPagination";
import ShopProductCard from "./ShopProductCard";
import ShopBrands from "./ShopBrands";

export default function ShopProducts() {
  const products = [
    { id: 1, image: "/Editor/image4.jpg" },
    { id: 2, image: "/Editor/image3.jpg" },
    { id: 3, image: "/Editor/image2.jpg" },
    { id: 4, image: "/Editor/image1.jpg" },
    { id: 5, image: "/Products/product-shop-5.jpg" },
    { id: 6, image: "/Products/product-shop-6.jpg" },
    { id: 7, image: "/Products/product-shop-7.jpg" },
    { id: 8, image: "/Products/product-shop-8.jpg" },
    { id: 9, image: "/Products/product-shop-9.jpg" },
    { id: 10, image: "/Products/product-shop-10.jpg" },
    { id: 11, image: "/Products/product-shop-11.jpg" },
    { id: 12, image: "/Products/product-shop-12.jpg" },
  ];

  return (
    <section className="p-10 w-full h-full mt-6">
      <div className="max-w-6xl mx-auto">
        {/* ------products----- */}
        <div className="flex flex-wrap -mx-4 lg:gap-y-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
            >
              <ShopProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <ShopPagination />

      <div className="mt-16 bg-[#FAFAFA] -mx-10 px-10">
        <ShopBrands />
      </div>
    </section>
  );
}
