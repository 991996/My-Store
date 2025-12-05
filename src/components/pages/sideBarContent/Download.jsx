import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import { CloudDownload } from "lucide-react";

function Downloads() {
  return (
    <div className="flex flex-col gap-5 md:gap-8">
      <div className="flex gap-2 items-center">
        <CloudDownload size={30} className="text-gray-400" />
        <h1 className="font-bold text-[22px]">Downloads</h1>
      </div>
      <p className="text-gray-500">No downloads available yet.</p>

      <Link to="/">
        <Button
          className="flex items-center justify-center uppercase cursor-pointer tracking-wider rounded-none py-5 text-[13px]
                     bg-gray-100 text-gray-800 font-semibold hover:bg-blue hover:text-white duration-300"
        >
          go shop
        </Button>
      </Link>
    </div>
  );
}

export default Downloads;
