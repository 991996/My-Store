import "./App.css";
import Header from "./components/header/Header";
import CategoryCircle from "./components/categories/CategoryCircle";
import { categories } from "./data/data";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsContext } from "./contexts/ProductsContext";
import Home from "./components/pages/Home";
import Category from "./components/pages/Category";

import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/pages/ProductPage";
import { FaStar, FaStarHalf } from "react-icons/fa";
import GoToTop from "./components/GoToTop";
import WishList from "./components/pages/WishList";
import Cart from "./components/pages/cart";
import ContactUs from "./components/pages/ContactUs";
import Account from "./components/pages/Account";
import Dashboard from "./components/pages/sideBarContent/Dashboard";
import Orders from "./components/pages/sideBarContent/Orders";
import Downloads from "./components/pages/sideBarContent/Download";
import Addresses from "./components/pages/sideBarContent/Addresses";
import AccountDetails from "./components/pages/sideBarContent/AccountDetails";
import ShippingAddress from "./components/pages/sideBarContent/ShippingAddress";

let cancelAxios = null;
function App() {
  const [products, setProducts] = useState([]);
  function handleRate(product) {
    const rate = Math.round(product.rating.rate * 2) / 2;
    const stars = [];
    for (let i = 0; i < Math.floor(rate); i++) {
      stars.push(<FaStar key={i} size={15} className="text-yellow-400" />);
    }
    if (rate % 1 !== 0) {
      stars.push(
        <FaStarHalf key="half" size={15} className="text-yellow-400" />
      );
    }

    return stars;
  }
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
      <ProductsContext.Provider value={{ products, handleRate }}>
        <div className="max-w-7xl mx-auto p-8">
          <Header />
          <div className=" hidden lg:flex justify-between mt-5">
            {categories.map((c) => {
              return <CategoryCircle key={c.id} category={c} />;
            })}
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category/:name" element={<Category />}></Route>
          <Route path="/product-details" element={<ProductPage />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/account" element={<Account />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="orders" element={<Orders />}></Route>
            <Route path="downloads" element={<Downloads />}></Route>
            <Route path="addresses" element={<Addresses />}></Route>
            <Route path="account-details" element={<AccountDetails />}></Route>
            <Route
              path="shipping-address"
              element={<ShippingAddress />}
            ></Route>
          </Route>
        </Routes>
        <GoToTop />

        <MobileNavigation />
        <Footer />
        <div className="mt-15 sm:mt-0"></div>
      </ProductsContext.Provider>
    </>
  );
}

export default App;
