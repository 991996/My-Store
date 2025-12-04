import background from "@/assets/images/wishlistBG.jpg";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useContext, useState } from "react";
import { ProductsContext } from "@/contexts/ProductsContext";
import ProductViewDialog from "../products/ProductViewDialog";
import { X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

function WishList() {
  const { products } = useContext(ProductsContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleRate() {
    const rate = Math.round(selectedProduct.rating.rate * 2) / 2;
    const stars = [];
    for (let i = 0; i < Math.floor(rate); i++) {
      stars.push(<FaStar key={i} size={15} className="text-yellow-400" />);
    }
    if (rate % 1 !== 0) {
      stars.push(
        <FaStarHalf key="half" size={15} className="text-yellow-400" />
      );
    }

    return stars;
  }
  return (
    <div className="flex flex-col gap-10">
      {/* image section */}
      <div className=" relative flex justify-center items-center text-white py-5 h-[120px] md:h-[200px]">
        <img
          src={background}
          className=" absolute w-full h-[120px] md:h-[200px] inset-0 object-cover"
        />
        {/* overlay */}
        <div className=" absolute inset-0 w-full h-full bg-blue/60"></div>
        <div className="flex gap-3 z-10 items-start">
          <div className="flex flex-col gap-3 items-center">
            <div className="flex items-center text-sm lg:text-base">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <MdKeyboardArrowRight /> <p>Wishlist</p>
            </div>
            <h1 className="uppercase tracking-wider text-2xl md:text-3xl lg:text-4xl font-bold">
              Wishlist
            </h1>
          </div>
        </div>
      </div>
      {/* Products */}
      <div className="w-full max-w-7xl mx-auto py-8">
        <Table>
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
                Stock Status
              </TableHead>
              <TableHead className="font-bold tracking-wide uppercase">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.slice(0, 3).map((p) => {
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
                      <div className="md:hidden font-bold">${p.price}</div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-gray-500">
                    ${p.price}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    In stock
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col md:flex-row gap-2">
                      <Button
                        type="button"
                        onClick={() => {
                          setOpenDialog(true);
                          setSelectedProduct(p);
                        }}
                        className="hidden md:flex items-center justify-center uppercase cursor-pointer tracking-wider rounded-none py-5 text-[13px]
                                          bg-gray-100 text-gray-800 font-semibold hover:bg-blue hover:text-white duration-300"
                      >
                        Quick view
                      </Button>
                      <Button
                        className="uppercase cursor-pointer tracking-wider rounded-none px-0 md:px-4 py-5 text-xs md:text-[13px]
                                          bg-gray-800 text-white font-semibold hover:bg-gray-700 hover:text-white duration-300"
                      >
                        Add to cart
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      {/* Dialog */}
      <ProductViewDialog
        open={openDialog}
        onOpenChange={setOpenDialog}
        product={selectedProduct}
        handleRate={handleRate}
      />
    </div>
  );
}

export default WishList;
