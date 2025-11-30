import { useLocation } from "react-router-dom";
import ProductInfo from "../products/ProductInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import bodyShape from "@/assets/images/body-shape.png";
import { sizeGuide } from "@/data/data.jsx";
import review from "@/assets/images/author.jpg";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Review from "../Review";
import AddReviewForm from "../AddReviewForm";
import { useContext } from "react";
import { ProductsContext } from "@/contexts/ProductsContext";
import ProductsSwiper from "../products/ProductsSwiper";

function ProductPage() {
  const { state } = useLocation();
  const product = state?.product;
  const reviews = [
    {
      name: "Joe Doe",
      image: review,
      date: "April 12,2021",
      rate: 2.5,
      review: "Excellent",
    },
  ];

  let { products } = useContext(ProductsContext);
  products = products.filter((p) => p.category === product.category);

  return (
    <div className="max-w-7xl mx-auto p-8 flex flex-col gap-5">
      <ProductInfo product={product} />
      {/* TABS */}

      <Tabs defaultValue="description" className="w-full text-sm text-gray-500">
        <div className="w-full border-b mb-8">
          <TabsList className="bg-transparent pb-0 flex flex-wrap gap-3">
            <TabsTrigger
              value="description"
              className="data-[state=active]:bg-transparent pb-0
                         data-[state=active]:shadow-none
                         data-[state=active]:ring-0
                       data-[state=active]:text-gray-800 
                        data-[state=active]:border-b-2 data-[state=active]:border-b-black
                        font-semibold text-xs tracking-wide uppercase text-gray-400 cursor-pointer
                        hover:text-gray-800 duration-300 hover:border-b-2 hover:border-b-black rounded-none"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="size"
              className="data-[state=active]:bg-transparent pb-0
                         data-[state=active]:shadow-none
                         data-[state=active]:ring-0
                       data-[state=active]:text-gray-800 
                        data-[state=active]:border-b-2 data-[state=active]:border-b-black
                        font-semibold text-xs tracking-wide uppercase text-gray-400 cursor-pointer
                        hover:text-gray-800 duration-300 hover:border-b-2 hover:border-b-black rounded-none"
            >
              Size Guide
            </TabsTrigger>
            <TabsTrigger
              value="additional-information"
              className="data-[state=active]:bg-transparent pb-0
                         data-[state=active]:shadow-none
                         data-[state=active]:ring-0
                       data-[state=active]:text-gray-800 
                        data-[state=active]:border-b-2 data-[state=active]:border-b-black
                        font-semibold text-xs tracking-wide uppercase text-gray-400 cursor-pointer
                        hover:text-gray-800 duration-300 hover:border-b-2 hover:border-b-black rounded-none"
            >
              Additional Information
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="data-[state=active]:bg-transparent pb-0
                         data-[state=active]:shadow-none
                         data-[state=active]:ring-0
                       data-[state=active]:text-gray-800 
                        data-[state=active]:border-b-2 data-[state=active]:border-b-black
                        font-semibold text-xs tracking-wide uppercase text-gray-400 cursor-pointer
                        hover:text-gray-800 duration-300 hover:border-b-2 hover:border-b-black rounded-none"
            >
              Reviews (1)
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="description">
          <p>{product?.description}</p>
        </TabsContent>
        <TabsContent value="size">
          <div className="flex flex-col md:flex-row gap-5 lg:gap-40 lg:ml-15">
            <img
              src={bodyShape}
              alt="Body shape"
              className="w-[40%] sm:w-[30%] mx-auto md:w-fit"
            />
            <Table>
              <TableCaption></TableCaption>
              <TableHeader>
                <TableRow className="bg-gray-200 hover:bg-gray-200">
                  <TableHead className="font-bold text-center">SIZE</TableHead>
                  <TableHead className="font-bold text-center">
                    CHEST(in.)
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    {" "}
                    WAIST(in.)
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    HIPS(in.)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="font-bold tracking-wider text-gray-600 text-center">
                {sizeGuide.map((s, index) => {
                  return (
                    <TableRow
                      key={s.id}
                      className={index % 2 !== 0 ? "bg-gray-100" : ""}
                    >
                      <TableCell className="font-medium uppercase py-4">
                        {s.size}
                      </TableCell>
                      <TableCell>{s.chest}</TableCell>
                      <TableCell>{s.waist}</TableCell>
                      <TableCell>{s.hips}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="additional-information">
          <Table>
            <TableCaption></TableCaption>
            <TableHeader></TableHeader>
            <TableBody className="tracking-wider text-gray-500">
              <TableRow className="bg-gray-100">
                <TableCell className="font-semibold pl-5">Weight</TableCell>
                <TableCell>23 kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold pl-5">Dimensions</TableCell>
                <TableCell>12 × 24 × 35 cm</TableCell>
              </TableRow>
              <TableRow className="bg-gray-100">
                <TableCell className="font-semibold pl-5">Color</TableCell>
                <TableCell>Black, Green, Indigo</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold pl-5">Size</TableCell>
                <TableCell> Large, Medium, Small</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="flex flex-col gap-4 pt-4 sm:pt-0">
            <h1 className="text-gray-800 text-[17px]">
              {reviews.length} reviews for {product.title}
            </h1>
            {reviews.map((r, index) => {
              return <Review key={index} review={r} />;
            })}
            <AddReviewForm />
          </div>
        </TabsContent>
      </Tabs>
      <div className="mt-15 flex flex-col gap-4">
        <h1 className="font-bold text-xl">Related Products</h1>
        <hr></hr>
        <ProductsSwiper products={products} lgCount={4} mdCount={3} />
      </div>
    </div>
  );
}

export default ProductPage;
