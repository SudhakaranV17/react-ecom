import { Separator } from "@/components/ui/separator";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";

import "./footer.scss";
function Footer() {
  return (
    <footer className="w-full flex flex-col-reverse lg:flex-row justify-between">
      <div className="w-full py-8 lg:py-0 lg:w-[8%] flex justify-center items-center bg-white">
        <div className="flex lg:flex-col gap-8">
          <FaFacebookF />
          <FaXTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>
      <div className="w-full lg:w-[92%] bg-black/5 py-10">
        <div className="w-[90%] lg:w-[70%] mx-auto">
          <div className="flex gap-6 md:gap-0 justify-between flex-wrap">
            <div className="w-full sm:w-[unset] ">
              <h3 className="font-medium text-lg">Store Information</h3>
              <p className="text-sm text-black/60 mt-5 leading-loose">
                Fortsi - Fashion Store <br />
                United States <br />
                000-000-0000 <br />
                123456 <br />
                sales@yourcompany.com
              </p>
            </div>
            <div className="w-full sm:w-[unset]">
              <h3 className="font-medium text-lg">Information</h3>
              <div className="flex flex-col gap-3 text-sm mt-5">
                <Link>About Us</Link>
                <Link>Delivery Information</Link>
                <Link>Privacy Policy</Link>
                <Link>Terms & Conditions</Link>
                <Link>Contact Us</Link>
              </div>
            </div>
            <div className="w-full sm:w-[unset]">
              <h3 className="font-medium text-lg">My Account</h3>
              <div className="flex flex-col gap-3 text-sm mt-5">
                <Link>My Account</Link>
                <Link>Order History</Link>
                <Link>Wish List</Link>
                <Link>Newsletter</Link>
                <Link>Returns</Link>
              </div>
            </div>
            <div className="w-full sm:w-[unset]">
              <h3 className="font-medium text-lg">Payment Method</h3>
              <div className="flex gap-5 mt-5">
                <FaCcVisa className="w-6 h-6" />
                <FaCcMastercard className="w-6 h-6" />
                <FaCcPaypal className="w-6 h-6" />
              </div>
            </div>
          </div>
          <Separator className="bg-black/30 mt-12 md:mt-14 mb-5 lg:mb-8" />
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="w-[7rem] h-16 flex items-center justify-center">
                <img src="/logo.png" alt="" />
              </div>
              <Separator
                orientation={"vertical"}
                className="hidden sm:block bg-black/70 h-14"
              />
              <p className="text-sm opacity-80">2024 - All Rights Reserved.</p>
            </div>
            <div className="">
              <p className="text-sm opacity-80">site by lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
