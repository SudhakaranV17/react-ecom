import { CiMenuFries } from "react-icons/ci";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaShoppingCart } from "react-icons/fa";

import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import styles from "./header.module.css";
import { Button, buttonVariants } from "@/components/ui/button";
import { useSelector } from "react-redux";
import clsx from "clsx";
function Header() {
  const { totalItems } = useSelector((state) => state.cart);
  const StyledLink = styled.span`
    text-decoration: none;
    color: black; /* Default color of the link */
    transition: all 0.5s ease; /* Smooth transition for hover effect */

    &:hover {
      margin-left: 10px;
      color: rgba(0, 0, 0, 0.6); /* Change color to gray on hover */
    }
    @media screen and (max-width: 640px) {
      font-size: 1.1rem;
    }
  `;

  return (
    <header className="relative w-full z-50 p-6 md:py-12 md:px-14 flex justify-between ">
      {/* left */}
      <div className="flex items-center gap-12 justify-between w-full md:w-fit">
        <div className="w-[100px] sm:w-[unset]">
          <img src="/logo.png" alt="" />
        </div>
        <div className=" w-[1px] h-full bg-black/20 hidden md:block"></div>
        <div className="flex items-center justify-center gap-2">
          <Drawer direction="left">
            <DrawerTrigger>
              <div className="flex gap-4 items-center">
                <CiMenuFries className="w-6 h-6" />
                <p className="">Menu</p>
              </div>
            </DrawerTrigger>
            <DrawerContent className="w-[100vw] sm:w-[30vw] lg:w-[unset]">
              <DrawerHeader>
                <DrawerClose className="mb-6 w-fit absolute top-5 right-5 ">
                  <CgClose className="w-5 h-5 sm:w-6 sm:h-6 transition-transform hover:rotate-180 ease-in duration-300" />
                </DrawerClose>
                <DrawerTitle className="flex flex-col gap-6 sm:gap-8 mt-6 border-t border-black/10 pt-10">
                  <Link to={"/"}>
                    <StyledLink>Home</StyledLink>
                  </Link>
                  <Link>
                    <StyledLink>About</StyledLink>
                  </Link>
                  <Link to={"/shop"}>
                    <StyledLink>Shop</StyledLink>
                  </Link>
                  <Link to={"/cart"} className="md:hidden">
                    <StyledLink>Cart</StyledLink>
                  </Link>
                  <Link to={"/account"}>
                    <StyledLink>Account</StyledLink>
                  </Link>
                  <Link>
                    <StyledLink>Contact</StyledLink>
                  </Link>
                </DrawerTitle>
                {/* DESCRIPTION */}
                <DrawerDescription></DrawerDescription>
              </DrawerHeader>
              {/* footer */}
              <DrawerFooter>
                {true ? (
                  <Link
                    to={"/account"}
                    className={clsx(buttonVariants({ variant: "default" }))}
                  >
                    Login
                  </Link>
                ) : (
                  <Button>Logout</Button>
                )}
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      {/* right */}
      <div className="hidden md:flex items-center gap-8">
        <Button className="" variant="ghost">
          <IoSearch className="w-[25px] h-[25px]" />
        </Button>
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none pointer-events-auto flex items-center w-[40px] h-[40px] justify-center hover:bg-black  duration-300 rounded-full transition-all group">
              <FaUser
                className={`w-[20px] h-[20px] outline-none focus-visible:outline-none transition-all duration-300 group-hover:fill-white
                `}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className={styles.DropdownMenuContent}
            >
              {true ? (
                <Link to={"/account"}>
                  <DropdownMenuLabel>Login</DropdownMenuLabel>
                </Link>
              ) : (
                <>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Wishlist</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Link
          to={"/cart"}
          className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-black hover:opacity-50 cursor-pointer relative"
        >
          <FaShoppingCart className="fill-white" />
          <div className="w-5 h-5 rounded-full bg-white absolute -top-px right-0 flex items-center justify-center text-[0.7rem] font-medium">
            {totalItems.toString().length > 2
              ? totalItems.toString().slice(0, 2).padEnd(3, "+")
              : totalItems}
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
