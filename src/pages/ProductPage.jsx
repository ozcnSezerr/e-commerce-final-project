import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/productActions";
import { ChevronLeft } from "lucide-react";

import ProductBrands from "../components/ProductDetail/ProductBrands";
import ProductBreadCrumb from "../components/ProductDetail/ProductBreadCrumb";
import ProductDescription from "../components/ProductDetail/ProductDescription";
import ProductInfo from "../components/ProductDetail/Productİnfo";
import ProductList from "../components/ProductDetail/ProductList";

export default function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const { currentProduct, fetchState } = useSelector((state) => state.product);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productId) {
      dispatch(fetchProduct(productId));
    }
  }, [dispatch, productId]);

  // spinner
  if (fetchState === "FETCHING") {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-[#FAFAFA]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#23A6F0]"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA]">
      <div className="container mx-auto px-4 py-4">
        {/* back*/}
        <button
          onClick={() => history.goBack()}
          className="flex items-center gap-2 text-gray-500 hover:text-[#23A6F0] font-bold mb-4 transition-colors"
        >
          <ChevronLeft size={20} />
          Back
        </button>
      </div>

      <ProductBreadCrumb productName={currentProduct?.name} />

      {currentProduct.id && <ProductInfo product={currentProduct} />}

      <ProductDescription product={currentProduct} />
      <ProductList />
      <ProductBrands />
    </div>
  );
}
