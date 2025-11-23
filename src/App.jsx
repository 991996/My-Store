import "./App.css";
import Header from "./components/header/Header";
import ImageSlider from "./components/ImageSlider";
import CategoryCircle from "./components/categories/CategoryCircle";
import { sliderImages, categories } from "./data/data";
import FeaturesSection from "./components/FeaturesSection";
import TopProductsSection from "./components/products/TopProductsSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsContext } from "./contexts/ProductsContext";
import TrendingLooksSection from "./components/TrendingLooksSection";
import SaleProductSection from "./components/products/SaleProductSection";
import NewArrivalSection from "./components/products/NewArrivalSection";
import BigSaleBar from "./components/BigSaleBar";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";

let cancelAxios = null;
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("https://fakestoreapi.com/products", {
        cancelToken: new axios.CancelToken((c) => {
          cancelAxios = c;
        }),
      })
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {
      cancelAxios();
    };
  }, []);
  return (
    <>
      <ProductsContext.Provider value={products}>
        <div className="max-w-7xl mx-auto p-8">
          <Header />
          <div className=" hidden lg:flex justify-between mt-5">
            {categories.map((c) => {
              return (
                <CategoryCircle key={c.id} image={c.image} name={c.name} />
              );
            })}
          </div>
        </div>

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
        <MobileNavigation />
        <Footer />
        <div className="mt-15 sm:mt-0"></div>
      </ProductsContext.Provider>
    </>
  );
}

export default App;
