import { Input } from "../ui/input";
import { Search, X } from "lucide-react";

function SideMenu({ onClickX }) {
  return (
    <>
      {/* OverLay */}
      <div className=" fixed inset-0 z-100 bg-black/50"></div>
      <div
        className="bg-gray-800 h-screen px-4 py-5 text-white w-[50%] fixed z-200 top-0 left-0
                       flex flex-col justify-between"
      >
        <div className="flex flex-col gap-8">
          <X className=" self-end cursor-pointer" onClick={onClickX} />
          <ul>
            <li className="border-b border-gray-500 py-2">
              <a href="">Home</a>
            </li>
            <li className="border-b border-gray-500 py-2">
              <a href="">Categories</a>
            </li>
            <li className="border-b border-gray-500 py-2">
              <a href="">Products</a>
            </li>
            <li className="border-b border-gray-500 py-2">
              <a href="">Contact us</a>
            </li>
            <li className="border-b border-gray-500 py-2">
              <a href="">My wishlist</a>
            </li>
            <li className="border-b border-gray-500 py-2">
              <a href="">Cart</a>
            </li>
            <li className=" py-2">
              <a href="">Log in</a>
            </li>
          </ul>
        </div>
        <div className="relative flex justify-center items-center">
          <Search className=" absolute text-white right-2" />
          <Input
            type="text"
            placeholder="Search..."
            className="bg-gray-600 border-none"
          />
        </div>
      </div>
    </>
  );
}

export default SideMenu;
