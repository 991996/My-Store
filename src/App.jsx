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
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      <BrowserRouter>
        <ProductsContext.Provider value={products}>
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
          </Routes>

          <MobileNavigation />
          <Footer />
          <div className="mt-15 sm:mt-0"></div>
        </ProductsContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
