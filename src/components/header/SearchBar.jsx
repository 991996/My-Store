import { Input } from "../ui/input";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <>
      <div className="relative hidden md:flex gap-3 justify-center items-center w-[50%]">
        <Search className=" absolute text-gray-500 right-2" />
        <Input
          type="text"
          placeholder="Search"
          className=" border-0 border-b shadow-none rounded-none
          focus-visible:ring-0 focus-visible:border-gray-400"
        />
      </div>
    </>
  );
}

export default SearchBar;
