import { useState } from "react";
import Logo from "../Logo";
import SearchBar from "./SearchBar";
import SideMenu from "./SideMenu";
import SignIn from "./SignIn";
import TopHeader from "./TopHeader";
import { Heart, Handbag, TextAlignJustify } from "lucide-react";

function Header() {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <>
      {sideMenu ? <SideMenu onClickX={() => setSideMenu(false)} /> : <></>}
      <TopHeader />
      <div className="flex justify-between mt-8 w-full items-center">
        <div className="flex justify-center items-center gap-3">
          <TextAlignJustify
            className=" lg:hidden cursor-pointer"
            onClick={() => setSideMenu(true)}
          />
          <Logo />
        </div>

        <SearchBar />
        <div className="flex gap-4">
          <a href="#">
            <SignIn />
          </a>
          <div className=" relative">
            <div
              className=" absolute flex justify-center items-center text-[13px] text-white
             h-4 w-4 bg-red-500 rounded-full right-0"
            >
              1
            </div>
            <div className="w-8 sm:w-9 md:w-10 aspect-square">
              <Heart className="w-full h-full" strokeWidth={1} />
            </div>
          </div>
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
    </>
  );
}

export default Header;
