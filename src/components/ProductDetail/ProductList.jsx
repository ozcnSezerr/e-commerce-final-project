import ProductListCard from "./ProductListCard";

export default function ProductList() {
  const products = [
    { id: 1, image: "/Gallery/list-5.jpg" },
    { id: 2, image: "/Gallery/list-2.jpg" },
    { id: 3, image: "/Gallery/list-3.jpg" },
    { id: 4, image: "/Gallery/list-4.jpg" },
    { id: 5, image: "/Gallery/list-2.jpg" },
    { id: 6, image: "/Gallery/list-6.jpg" },
    { id: 7, image: "/Gallery/list-5.jpg" },
    { id: 8, image: "/Gallery/list-4.jpg" },
  ];

  return (
    <section className="p-10 w-full h-full mt-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="uppercase border-b border-[#ebebeb] pb-8 mb-8 text-2xl font-bold text-center">
          BESTSELLER PRODUCTS
        </h3>
        {/* ------products----- */}
        <div className="flex flex-wrap -mx-4 justify-center">
          {products.map((product) => (
            <div key={product.id} className="px-4 mb-8 ">
              <ProductListCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
