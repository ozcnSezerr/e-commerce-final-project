import AboutUs from "../components/About/AboutUs";
import Companies from "../components/About/Companies";
import Stats from "../components/About/Stats";
import VideoCard from "../components/About/VideoCard";
import TeamPage from "./TeamPage";
import ShopBrands from "../components/shop/ShopBrands";
import ContactSection from "../components/About/ContactSection";
export default function AboutPage() {
  return (
    <>
      <AboutUs />
      <Stats />
      <VideoCard />
      <TeamPage />
      <Companies />
      <ShopBrands />
      <ContactSection />
    </>
  );
}
