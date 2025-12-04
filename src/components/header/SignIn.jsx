import { AuthContext } from "@/contexts/AuthContext";
import { UserRound } from "lucide-react";
import { useContext } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

function SignIn() {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="font-bold text-lg cursor-pointer">
            <div className="flex gap-3 text-gray-700">
              <div className="w-8 sm:w-9 md:w-10 aspect-square">
                <UserRound className="w-full h-full" strokeWidth={1} />
              </div>
              <div className=" hidden lg:flex flex-col items-start">
                <p className="text-gray-400 text-xs">Welcome</p>

                <h1 className="font-bold text-lg">{user.username}</h1>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link to="/account">
              <DropdownMenuItem>My profile</DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to="/login">
          <div className="flex gap-3 text-gray-700">
            <div className="w-8 sm:w-9 md:w-10 aspect-square">
              <UserRound className="w-full h-full" strokeWidth={1} />
            </div>
            <div className=" hidden lg:flex flex-col items-start">
              <p className="text-gray-400 text-xs">Welcome</p>

              <h1 className="font-bold text-lg">Sign In/ Register</h1>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default SignIn;
