import TrendingLooksSection from "@/components/TrendingLooksSection";
import SaleProductSection from "@/components/products/SaleProductSection";
import NewArrivalSection from "@/components/products/NewArrivalSection";
import BigSaleBar from "@/components/BigSaleBar";
import SubscribeSection from "@/components/SubscribeSection";
import { sliderImages } from "@/data/data";
import FeaturesSection from "@/components/FeaturesSection";
import TopProductsSection from "@/components/products/TopProductsSection";
import ImageSlider from "@/components/ImageSlider";

function Home() {
  return (
    <>
      <ImageSlider images={sliderImages} />

      <div className="max-w-7xl mx-auto p-8 flex flex-col gap-20">
        <FeaturesSection />
        <TopProductsSection />
      </div>
      <TrendingLooksSection />
      <div className="max-w-7xl mx-auto py-16 px-8 flex flex-col gap-20">
        <SaleProductSection />
        <BigSaleBar />
        <NewArrivalSection />
        <SubscribeSection />
      </div>
    </>
  );
}

export default Home;
