import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaCcVisa, FaCcPaypal, FaCcStripe } from "react-icons/fa6";
import Logo from "./Logo";

function Footer() {
  return (
    <>
      <div className="text-gray-500 px-5 py-14 bg-linear-to-br lg:bg-linear-to-r from-mustard via-cherry-blossom to-blue">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:w-[80%] mx-auto">
          {/* Social media */}
          <div className="flex flex-col gap-4">
            <Logo color="white" />
            <div className="flex gap-3 items-center text-white">
              <a
                href="https://www.facebook.com/"
                className="bg-cherry-blossom hover:bg-cherry-blossom/70 p-3 rounded-full"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/"
                className="bg-cherry-blossom hover:bg-cherry-blossom/70 p-3 rounded-full"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                className="bg-cherry-blossom hover:bg-cherry-blossom/70 p-3 rounded-full"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* 1 */}
          <div className="flex flex-col gap-4">
            <label className="uppercase text-gray-800 font-bold text-sm lg:text-base">
              CUSTOMER SERVICE
            </label>
            <ul className="text-[13px] lg:text-sm flex flex-col gap-3">
              <li>
                <a href="#" className=" hover:underline">
                  Help & FAQs
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Orders History
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Advanced Search
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Login
                </a>
              </li>
            </ul>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-4">
            <label className="uppercase text-gray-800 font-bold text-sm lg:text-base">
              About Us
            </label>
            <ul className="text-[13px] lg:text-sm flex flex-col gap-3">
              <li>
                <a href="#" className=" hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Our Stores
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Corporate Sales
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-4">
            <label className="uppercase text-gray-800 font-bold text-sm lg:text-base">
              More Information
            </label>
            <ul className="text-[13px] lg:text-sm flex flex-col gap-3">
              <li>
                <a href="#" className=" hover:underline">
                  Affiliates
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Refer a Friend
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Student Beans Offers
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Gift Vouchers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between px-5 lg:px-0 lg:w-[80%] mx-auto py-12">
        <p className="text-sm text-gray-500">
          RKCode eCommerce. © 2025. All Rights Reserved
        </p>
        <div className="flex gap-2 text-gray-400">
          <FaCcVisa size={35} />
          <FaCcPaypal size={35} />
          <FaCcStripe size={35} />
        </div>
      </div>
    </>
  );
}

export default Footer;
