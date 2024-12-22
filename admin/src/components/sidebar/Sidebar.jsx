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
import { FaFilterCircleDollar, FaChevronRight } from "react-icons/fa6";
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
  const [accordionValue, setAccordionValue] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
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
  useEffect(() => {
    if (!isHovered && !isFixed) {
      // Close all accordions when leaving the sidebar and isFixed is false
      setAccordionValue([]);
    }
  }, [isHovered, isFixed]);
  const handleToggleAccordion = (key) => {
    setAccordionValue(
      (prevValue) => (prevValue.includes(key) ? [] : [key]) // Toggle between open and closed states
    );
  };
  return (
    <div
      className=" p-6 text-white relative z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (!isHovered && !isFixed) {
          setAccordionValue([]);
        }
      }}
    >
      {/* header */}
      <div className="flex justify-between mb-8">
        <h3>ADMIN</h3>
        <div
          className={clsx(
            isFixed ? "visible" : "invisible",
            "w-6 h-6 group-hover:!visible flex items-center justify-center hover:bg-slate-800 rounded-full transition-all ease-out duration-75"
          )}
        >
          <IoChevronBack
            onClick={sidebarHandler}
            className={clsx(
              !isFixed ? "" : "rotate-180",
              "transition-all ease-out cursor-pointer"
            )}
          />
        </div>
      </div>

      {/* admin list */}
      <Accordion
        type="multiple"
        collapsible
        className="w-full"
        value={accordionValue}
        onValueChange={setAccordionValue} // Update state on accordion toggle
      >
        {productsList &&
          Object.entries(productsList)?.map(([key, value]) => {
            const IconComponent = iconMap[value.icon]; // Dynamically map the icon to the React component

            return (
              <AccordionItem value={key} key={key} className="">
                <AccordionTrigger onClick={() => handleToggleAccordion(key)}>
                  <div className="flex gap-2 items-end w-full">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 min-w-6 min-h-6" />
                    )}{" "}
                    {/* Render the icon */}
                    {value.component ? (
                      <Link to={value.component}>
                        <span
                          className={clsx(
                            isFixed && "!visible",
                            "invisible",
                            "group-hover:!visible lg:text-sm md-text-sm text-nowrap transition-all duration-75 ease-out "
                          )}
                        >
                          {key}
                        </span>
                      </Link>
                    ) : (
                      <span
                        className={clsx(
                          isFixed && "!visible",
                          "invisible",
                          "group-hover:!visible w-full flex justify-between items-center lg:text-sm md-text-sm text-nowrap transition-all duration-75 ease-out "
                        )}
                      >
                        {key}
                        <span className="w-6 h-6 flex justify-center items-center">
                          <FaChevronRight
                            className="AccordionChevron"
                            aria-hidden
                          />
                        </span>
                      </span>
                    )}
                  </div>
                </AccordionTrigger>

                {/* Render submenu if it exists */}
                {value.subMenu && value.subMenu.length > 0 && (
                  <AccordionContent className={""}>
                    <ul className="ml-4 flex flex-col gap-2 pl-5">
                      {value.subMenu.map((subItem, index) => (
                        <li
                          key={index}
                          className="list-disc 
                        "
                        >
                          <Link to={subItem.component}>
                            <span
                              className={clsx(
                                isFixed && "!visible",
                                "invisible",
                                "group-hover:!visible lg:text-sm md-text-sm text-nowrap transition-all duration-75 ease-out "
                              )}
                            >
                              {subItem.title}
                            </span>
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
