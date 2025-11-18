import { UserRound } from "lucide-react";

function SignIn() {
  return (
    <>
      <div className="flex gap-3 text-gray-700">
        <div className="w-8 sm:w-9 md:w-10 aspect-square">
          <UserRound className="w-full h-full" strokeWidth={1} />
        </div>
        <div className=" hidden lg:flex flex-col items-start">
          <p className="text-gray-400 text-xs">Welcome</p>
          <h1 className="font-bold text-lg">Sign In/ Register</h1>
        </div>
      </div>
    </>
  );
}

export default SignIn;
