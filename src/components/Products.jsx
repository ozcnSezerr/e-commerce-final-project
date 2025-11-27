import ProductCard from "./ProductCard";

export default function Products() {
  const products = [
    { id: 1, image: "/Products/product-1.jpg" },
    { id: 2, image: "/Products/product-2.jpg" },
    { id: 3, image: "/Products/product-3.jpg" },
    { id: 4, image: "/Products/product-4.jpg" },
    { id: 5, image: "/Products/product-5.jpg" },
    { id: 6, image: "/Products/product-6.jpg" },
    { id: 7, image: "/Products/product-7.jpg" },
    { id: 8, image: "/Products/product-8.jpg" },
  ];

  return (
    <section className="p-10 w-full h-full">
      <div className="max-w-6xl mx-auto">
        {/* ---header---- */}
        <div className="flex flex-col gap-2.5 text-center mb-20">
          <p className="tracking-wide text-[#737373] text-xl font-medium">
            Featured Products
          </p>
          <h2 className="text-2xl tracking-wide font-bold uppercase">
            BESTSELLER PRODUCTS
          </h2>
          <p className="tracking-wide text-[#737373] whitespace-pre-line">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* ------products----- */}
        <div className="flex flex-wrap -mx-4 lg:gap-y-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
