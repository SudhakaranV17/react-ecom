import { IoChevronBack } from "react-icons/io5";
import clsx from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BiSolidDashboard } from "react-icons/bi";
import { TbCalendarCheck, TbMailExclamation } from "react-icons/tb";
import {
  BsChatLeftTextFill,
  BsPersonFillGear,
  BsFillGrid3X3GapFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { AiFillPieChart } from "react-icons/ai";
import { IoSettingsSharp, IoPower } from "react-icons/io5";
import { GrUserSettings } from "react-icons/gr";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Mapping the icon names to React components
const iconMap = {
  BiSolidDashboard: BiSolidDashboard,
  TbCalendarCheck: TbCalendarCheck,
  TbMailExclamation: TbMailExclamation,
  BsChatLeftTextFill: BsChatLeftTextFill,
  BsPersonFillGear: BsPersonFillGear,
  BsFillGrid3X3GapFill: BsFillGrid3X3GapFill,
  BsFillPersonFill: BsFillPersonFill,
  MdOutlinePendingActions: MdOutlinePendingActions,
  FaStore: FaStore,
  FaFilterCircleDollar: FaFilterCircleDollar,
  AiFillPieChart: AiFillPieChart,
  IoSettingsSharp: IoSettingsSharp,
  IoPower: IoPower,
  GrUserSettings: GrUserSettings,
};

function Sidebar({ sidebarHandler, isFixed }) {
  const [productsList, setProductsList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/sidebar.json");
        if (!res.ok) {
          throw new Error("Error Fetching");
        }
        const data = await res.json();
        setProductsList(data);
      } catch (error) {
        console.log("Error fetching: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-black/60 p-6 text-white">
      {/* header */}
      <div className="flex justify-between mb-8">
        <h3>ADMIN</h3>
        <div className="w-6 h-6 invisible group-hover:!visible flex items-center justify-center hover:bg-slate-800 rounded-full transition-all ease-out duration-75">
          <IoChevronBack
            onClick={sidebarHandler}
            className={clsx(
              !isFixed ? "" : "rotate-180",
              "transition-all ease-out"
            )}
          />
        </div>
      </div>

      {/* admin list */}
      <Accordion type="multiple" collapsible className="w-full">
        {productsList &&
          Object.entries(productsList)?.map(([key, value]) => {
            const IconComponent = iconMap[value.icon]; // Dynamically map the icon to the React component

            return (
              <AccordionItem value={key} key={key} className="">
                <AccordionTrigger>
                  <div className="flex gap-2 items-end">
                    {IconComponent && <IconComponent className="w-6 h-6" />}{" "}
                    {/* Render the icon */}
                    <span
                      className={clsx(
                        isFixed && "!visible",
                        "invisible",
                        "group-hover:!visible transition-all duration-75 ease-out"
                      )}
                    >
                      {key}
                    </span>
                  </div>
                </AccordionTrigger>

                {/* Render submenu if it exists */}
                {value.subMenu && value.subMenu.length > 0 && (
                  <AccordionContent>
                    <ul className="ml-4 flex flex-col gap-2">
                      {value.subMenu.map((subItem, index) => (
                        <li key={index}>
                          <Link to={subItem.component}>
                            <span>{subItem.title}</span>
                          </Link>
                          {/* <div className="flex gap-2 items-center">
                          </div> */}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                )}
              </AccordionItem>
            );
          })}
      </Accordion>
    </div>
  );
}

export default Sidebar;
