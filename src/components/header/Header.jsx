import { useContext, useEffect, useState } from "react";
import Logo from "../Logo";
import SearchBar from "./SearchBar";
import SideMenu from "./SideMenu";
import SignIn from "./SignIn";
import TopHeader from "./TopHeader";
import { Heart, Handbag, TextAlignJustify } from "lucide-react";
import { AuthContext } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

function Header() {
  const [sideMenu, setSideMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {sideMenu ? <SideMenu onClickX={() => setSideMenu(false)} /> : <></>}
      <TopHeader />
      <div
        className={`flex justify-between w-full items-center z-100 duration-300
                      ${
                        isSticky
                          ? "fixed bg-white shadow-xl top-0 left-0 py-4 px-5 md:px-8 lg:px-6 xl:px-40"
                          : " mt-8"
                      }`}
      >
        <div className="flex justify-center items-center gap-3">
          <TextAlignJustify
            className=" lg:hidden cursor-pointer"
            onClick={() => setSideMenu(true)}
          />
          <Logo />
        </div>

        <SearchBar />
        <div className="flex gap-4">
          <SignIn />
          <div className={user ? "flex gap-4" : "hidden"}>
            <Link to="/wishlist" className=" relative">
              <div
                className=" absolute flex justify-center items-center text-[13px] text-white
             h-4 w-4 bg-red-500 rounded-full right-0"
              >
                1
              </div>
              <div className="w-8 sm:w-9 md:w-10 aspect-square">
                <Heart className="w-full h-full" strokeWidth={1} />
              </div>
            </Link>
            <div className=" relative">
              <div
                className=" absolute flex justify-center items-center text-[13px] text-white
             h-4 w-4 bg-red-500 rounded-full right-0"
              >
                3
              </div>
              <div className="w-8 sm:w-9 md:w-10 aspect-square">
                <Handbag className="w-full h-full" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
