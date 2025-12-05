import { AuthContext } from "@/contexts/AuthContext";
import {
  PackageOpen,
  CloudDownload,
  MapPin,
  UserRound,
  Truck,
  Heart,
} from "lucide-react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

function Dashboard() {
  const dashboard = [
    {
      name: "Orders",
      link: "../orders",
      icon: <PackageOpen size={60} className="text-gray-300" />,
    },
    {
      name: "Downloads",
      link: "../downloads",
      icon: <CloudDownload size={60} className="text-gray-300" />,
    },
    {
      name: "Addresses",
      link: "../addresses",
      icon: <MapPin size={60} className="text-gray-300" />,
    },
    {
      name: "Account Details",
      link: "../account-details",
      icon: <UserRound size={60} className="text-gray-300" />,
    },
    {
      name: "Wishlist",
      link: "/wishlist",
      icon: <Heart size={60} className="text-gray-300" />,
    },
    {
      name: "Shipping Adresses",
      link: "../shipping-adresses",
      icon: <Truck size={60} className="text-gray-300" />,
    },
  ];
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 text-gray-500">
      <p className="text-sm md:text-base">
        Hello <span className="font-bold text-gray-800">{user?.username}</span>
        (not <span className="font-bold text-gray-800">{user?.username}</span> ?
        <span
          className="text-blue-500 hover:underline cursor-pointer"
          onClick={() => {
            const result = logout();
            if (result.success) navigate("/");
          }}
        >
          Logout
        </span>
        )
      </p>
      <p className="text-[13px] md:text-[15px]">
        From your account dashboard you can view your{" "}
        <span className="text-blue-500 hover:underline cursor-pointer">
          recent orders{" "}
        </span>
        ,manage your{" "}
        <span className="text-blue-500 hover:underline cursor-pointer">
          shipping and billing addresses{" "}
        </span>
        ,and{" "}
        <span className="text-blue-500 hover:underline cursor-pointer">
          edit your password and account details.
        </span>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {dashboard.map((d) => {
          return (
            <Link to={d.link}>
              <div className="flex flex-col gap-2 md:gap-5 justify-center items-center border-2 aspect-5/4 md:aspect-7/4 group">
                <div className="scale-80 md:scale-100 duration-300 group-hover:scale-100 md:group-hover:scale-120">
                  {d.icon}
                </div>
                <p className=" uppercase font-bold text-xs text-gray-800">
                  {d.name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
