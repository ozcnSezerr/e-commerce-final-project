import ProductBreadCrumb from "../components/ProductDetail/ProductBreadCrumb";
import ProductDescription from "../components/ProductDetail/ProductDescription";
import Productİnfo from "../components/ProductDetail/Productİnfo";
import ProductList from "../components/ProductDetail/ProductList";

export default function ProductPage() {
  return (
    <>
      <ProductBreadCrumb />
      <Productİnfo />
      <ProductDescription />
      <ProductList />
    </>
  );
}
