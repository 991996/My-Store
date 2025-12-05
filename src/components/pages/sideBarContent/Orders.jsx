import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { PackageOpen } from "lucide-react";

function Orders() {
  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <div className="flex gap-2 items-center">
        <PackageOpen size={30} className="text-gray-400" />
        <h1 className="font-bold text-[22px]">Orders</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow className=" hidden md:table-row">
            <TableHead className="font-bold">ORDER</TableHead>
            <TableHead className="font-bold">DATE</TableHead>
            <TableHead className="font-bold">STATUS</TableHead>
            <TableHead className="font-bold">TOTAL</TableHead>
            <TableHead className="font-bold">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colSpan={5} className="text-center py-4 text-gray-500">
              No order has been made yet.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <hr></hr>
      <Link to="/" className="self-center">
        <Button className=" uppercase font-bold rounded-none py-7 px-12 text-[17px] tracking-wider cursor-pointer">
          go shop
        </Button>
      </Link>
    </div>
  );
}

export default Orders;
