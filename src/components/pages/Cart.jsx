import background from "@/assets/images/cartBG.jpg";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "@/contexts/ProductsContext";
import { X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CheckOutCard from "../CheckOutCard";
import { Plus, Minus } from "lucide-react";

function Cart() {
  const { products } = useContext(ProductsContext);
  const [quantityList, setQuantityList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (products.length > 0) {
      const qList = products.slice(0, 3).map((p) => {
        return { productId: p.id, quantity: 1 };
      });
      const totalPrice = products
        .slice(0, 3)
        .reduce((sum, p) => sum + p.price, 0);
      setTotal(totalPrice);
      setQuantityList(qList);
    }
  }, [products]);

  return (
    <div className="flex flex-col gap-10">
      {/* image section */}
      <div className=" relative flex justify-center items-center text-white py-5 h-[120px] md:h-[200px]">
        <img
          src={background}
          className=" absolute w-full h-[120px] md:h-[200px] inset-0 object-cover"
        />
        {/* overlay */}
        <div className=" absolute inset-0 w-full h-full bg-mustard/60"></div>
        <div className="flex gap-3 z-10 items-start">
          <div className="flex flex-col gap-3 items-center">
            <div className="flex items-center text-sm lg:text-base">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <MdKeyboardArrowRight /> <p>Cart</p>
            </div>
            <h1 className="uppercase tracking-wider text-2xl md:text-3xl lg:text-4xl font-bold">
              Cart
            </h1>
          </div>
        </div>
      </div>
      {/* Products */}
      <div className="flex flex-col gap-5 lg:flex-row justify-between w-[90%] mx-auto py-8">
        <Table className="max-w-4xl">
          <TableHeader>
            <TableRow className=" hidden md:table-row">
              <TableHead></TableHead>
              <TableHead className="font-bold tracking-wide uppercase">
                Product
              </TableHead>
              <TableHead className="font-bold tracking-wide uppercase">
                price
              </TableHead>
              <TableHead className="font-bold tracking-wide uppercase">
                Subtotal
              </TableHead>
              <TableHead className="font-bold tracking-wide uppercase">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.slice(0, 3).map((p) => {
              const productQuantity = quantityList.find(
                (q) => q.productId === p.id
              );
              return (
                <TableRow>
                  <TableCell className="max-w-22 md:max-w-fit">
                    <div className="w-20 aspect-square relative">
                      <div className=" cursor-pointer absolute -top-2 -right-2 p-1 bg-white rounded-full shadow aspect-square">
                        <X size={15} />
                      </div>
                      <Link to="/product-details" state={{ product: p }}>
                        <div className="w-full aspect-square p-2 bg-gray-100">
                          <img
                            src={p.image}
                            alt="product image"
                            className="w-full h-full object-contain "
                          />
                        </div>
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm lg:text-base font-thin max-w-[40svw]">
                    <div className="flex flex-col gap-1">
                      <div className=" text-wrap">{p.title}</div>
                      <div className="md:hidden font-bold text-gray-500">
                        ${p.price}
                      </div>
                      <div className="md:hidden font-bold text-[13.5px]">
                        ${p.price * productQuantity?.quantity}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-gray-500">
                    ${p.price}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    ${p.price * productQuantity?.quantity}
                  </TableCell>
                  <TableCell>
                    <div className="inline-flex border border-gray-300 rounded-md overflow-hidden h-10">
                      <button
                        className="px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center"
                        onClick={() => {
                          setQuantityList((prev) =>
                            prev.map((q) =>
                              q.productId === p.id
                                ? {
                                    ...q,
                                    quantity:
                                      q.quantity > 1 ? q.quantity - 1 : 1,
                                  }
                                : q
                            )
                          );
                          setTotal((prev) =>
                            productQuantity?.quantity > 1
                              ? prev - p.price
                              : prev
                          );
                        }}
                      >
                        <Minus size={15} />
                      </button>

                      <input
                        type="text"
                        className="w-14 text-center border-l border-r border-gray-300 focus:outline-none"
                        value={productQuantity?.quantity}
                        readOnly
                      />

                      <button
                        className="px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center"
                        onClick={() => {
                          setQuantityList((prev) =>
                            prev.map((q) =>
                              q.productId === p.id
                                ? { ...q, quantity: q.quantity + 1 }
                                : q
                            )
                          );
                          setTotal((prev) => prev + p.price);
                        }}
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className="w-full lg:w-[55%]">
          <CheckOutCard total={total} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
