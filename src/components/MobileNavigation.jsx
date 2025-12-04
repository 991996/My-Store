import { Heart, Handbag, UserRound, House, Logs } from "lucide-react";
import { Link } from "react-router-dom";

function MobileNavigation() {
  return (
    <>
      <div
        className="sm:hidden fixed w-full bg-white z-100 left-0 bottom-0 
      text-gray-800 border-t"
      >
        <div className="grid grid-cols-5 mx-auto">
          <Link
            to="/"
            className="flex flex-col items-center gap-1 border-r py-4"
          >
            <div className="w-7 aspect-square">
              <House className="w-full h-full" strokeWidth={1} />
            </div>
            <p className="text-[10px] uppercase font-bold">Home</p>
          </Link>
          <Link
            to="/"
            className="flex flex-col items-center gap-1 border-r py-4"
          >
            <div className="w-7 aspect-square">
              <Logs className="w-full h-full" strokeWidth={1} />
            </div>
            <p className="text-[10px] uppercase font-bold">Categories</p>
          </Link>
          <Link
            to="/wishlist"
            className="flex flex-col items-center gap-1 border-r py-4"
          >
            <div className="w-7 aspect-square">
              <Heart className="w-full h-full" strokeWidth={1} />
            </div>
            <p className="text-[10px] uppercase font-bold">Wishlist</p>
          </Link>
          <Link
            to="/account"
            className="flex flex-col items-center gap-1 border-r py-4"
          >
            <div className="w-7 aspect-square">
              <UserRound className="w-full h-full" strokeWidth={1} />
            </div>
            <p className="text-[10px] uppercase font-bold">Account</p>
          </Link>
          <Link to="/cart" className="flex flex-col items-center gap-1 py-4">
            <div className=" relative">
              <div
                className=" absolute flex justify-center items-center text-[13px] text-white
             h-4 w-4 bg-red-500 rounded-full -right-1"
              >
                3
              </div>
              <div className="w-7 aspect-square">
                <Handbag className="w-full h-full" strokeWidth={1} />
              </div>
            </div>
            <p className="text-[10px] uppercase font-bold">Cart</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileNavigation;
