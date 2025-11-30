import Slider from "../components/Slider/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import ProductSlider from "../components/Slider/ProductSlider";
import ActionSection from "../components/ActionSection";
import BlogSection from "../components/BlogSection";

export default function HomePage() {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
      <ProductSlider />
      <ActionSection />
      <BlogSection />
    </>
  );
}
