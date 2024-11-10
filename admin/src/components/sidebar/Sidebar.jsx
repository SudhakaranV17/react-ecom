import { IoChevronBack } from "react-icons/io5";
import clsx from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BiSolidDashboard } from "react-icons/bi";

function Sidebar({ sidebarHandler, isFixed }) {
  return (
    <div className="bg-black/60 h-screen p-6 text-white">
      {/* header */}
      <div className="flex justify-between mb-8">
        <h3>ADMIN</h3>
        <div className="">
          <IoChevronBack
            onClick={sidebarHandler}
            className={clsx(!isFixed ? "" : "rotate-90")}
          />
        </div>
      </div>
      {/* admin list */}
      <Accordion type="multiple" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex gap-2 items-end">
              <BiSolidDashboard className="w-6 h-6" />
              <span
                className={clsx(
                  isFixed && "!visible",
                  " invisible group-hover:!visible transition-all duration-100"
                )}
              >
                dashboard
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>Dashboard</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Sidebar;
