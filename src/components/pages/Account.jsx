import background from "@/assets/images/accountBG.jpg";
import { Link, Outlet, Route, Router, Routes } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  LayoutDashboard,
  Package2,
  PackageOpen,
  CloudDownload,
  MapPin,
  UserRound,
  Truck,
  LogOut,
  Heart,
} from "lucide-react";

function Account() {
  const sidebar = [
    {
      name: "Dashboard",
      link: "dashboard",
      icon: <LayoutDashboard />,
    },
    {
      name: "Orders",
      link: "orders",
      icon: <Package2 />,
    },
    {
      name: "Downloads",
      link: "",
      icon: <CloudDownload />,
    },
    {
      name: "Addresses",
      link: "",
      icon: <MapPin />,
    },
    {
      name: "Account Details",
      link: "",
      icon: <UserRound />,
    },
    {
      name: "Shipping Address",
      link: "",
      icon: <Truck />,
    },
    {
      name: "Whishlist",
      link: "",
      icon: <Heart />,
    },
    {
      name: "Logout",
      link: "",
      icon: <LogOut />,
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      {/* image section */}
      <div className=" relative flex justify-center items-center text-white py-5 h-[120px] md:h-[200px]">
        <img
          src={background}
          className=" absolute w-full h-[120px] md:h-[200px] inset-0 object-cover"
        />
        {/* overlay */}
        <div className=" absolute inset-0 w-full h-full bg-peach/60"></div>
        <div className="flex gap-3 z-10 items-start">
          <div className="flex flex-col gap-3 items-center">
            <div className="flex items-center text-sm lg:text-base">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <MdKeyboardArrowRight /> <p>Account</p>
            </div>
            <h1 className="uppercase tracking-wider text-2xl md:text-3xl lg:text-4xl font-bold">
              Account
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row justify-between w-[90%] mx-auto py-8">
        {/* SIDEBAR */}
        <div className="w-1/3">
          <h1 className=" tracking-wide mb-2 font-bold uppercase">
            My account
          </h1>
          {sidebar.map((s, index) => {
            return (
              <div key={index} className="w-full text-gray-500">
                <Link to={s.link} className="flex gap-3 items-center">
                  <div>{s.icon}</div>

                  <p className="my-2">{s.name}</p>
                </Link>
                <hr></hr>
              </div>
            );
          })}
        </div>
        {/* CONTENT */}
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Account;
