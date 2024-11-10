import FilterProducts from "./products/FilterProducts";
import Products from "./products/Products";
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
import { CgClose } from "react-icons/cg";
import { CgOptions } from "react-icons/cg";

function Shop() {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 lg:justify-between px-5 lg:px-10 py-7 lg:py-12">
        <div className="">
          <div className="hidden lg:block W-[25%]">
            <FilterProducts />
          </div>
          <div className="block ps-4 lg:hidden lg:ps-0">
            <Drawer direction="left">
              <DrawerTrigger>
                <div className="flex gap-2 items-center">
                  <CgOptions className="w-6 h-6" />
                  <p className="">Filter</p>
                </div>
              </DrawerTrigger>
              <DrawerContent
                className="w-[60%] ps-4 lg:w-[unset] lg:ps-0"
                data-vaul-no-drag
              >
                <DrawerHeader>
                  <DrawerClose className="mb-6 w-fit absolute top-5 right-5 ">
                    <CgClose className="w-6 h-6 transition-transform hover:rotate-180 ease-in duration-300" />
                  </DrawerClose>
                  <DrawerTitle className="flex flex-col gap-8 mt-6 border-t border-black/10 pt-10">
                    <FilterProducts />
                  </DrawerTitle>
                  {/* DESCRIPTION */}
                  {/* <DrawerDescription>
                </DrawerDescription> */}
                </DrawerHeader>
                {/* footer */}
                {/* <DrawerFooter></DrawerFooter> */}
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <div className="w-full lg:w-[75%]">
          <Products />
        </div>
      </div>
    </>
  );
}

export default Shop;
