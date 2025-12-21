import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setLimit } from "../../store/actions/productActions";
import ShopPagination from "./ShopPagination";
import ShopProductCard from "./ShopProductCard";
import ShopBrands from "./ShopBrands";

const LoadingSpinner = () => (
  <div className="w-full h-96 flex flex-col justify-center items-center gap-4">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#23A6F0]"></div>
    <span className="text-gray-500 font-bold">Ürünler Yükleniyor...</span>
  </div>
);

export default function ShopProducts() {
  const dispatch = useDispatch();

  const { productList, fetchState, limit, offset, category, filter, sort } =
    useSelector((store) => store.product);

  useEffect(() => {
    dispatch(setLimit(24));

    dispatch(fetchProducts());
  }, [dispatch, limit, offset, category, filter, sort]);

  return (
    <section className="p-4 md:p-10 w-full h-full mt-6">
      <div className="max-w-7xl mx-auto">
        {/* --- YÜKLENİYOR --- */}
        {fetchState === "FETCHING" && <LoadingSpinner />}

        {/* --- HATA --- */}
        {fetchState === "FAILED" && (
          <div className="text-center text-red-500 py-20">Veri çekilemedi.</div>
        )}

        {/* --- VERİ GELDİ --- */}
        {fetchState === "FETCHED" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {productList.length > 0 ? (
                productList.map((product) => (
                  <div key={product.id} className="w-full">
                    <ShopProductCard product={product} />
                  </div>
                ))
              ) : (
                <div className="w-full col-span-4 text-center py-20 text-gray-500 font-medium">
                  Aradığınız kriterlere uygun ürün bulunamadı.
                </div>
              )}
            </div>

            <ShopPagination />
          </>
        )}
      </div>

      <div className="mt-16 bg-[#FAFAFA] -mx-10 px-10 py-10">
        <ShopBrands />
      </div>
    </section>
  );
}
