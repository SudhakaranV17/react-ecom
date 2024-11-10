import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation, Link } from "react-router-dom";
import linkstyle from "./breadcrumbs.module.css";

function Breadcrumbs() {
  const location = useLocation();
  // Split the pathname to create breadcrumb items
  const pathnames = location.pathname.split("/").filter((x) => x);
  const breadcrumbItems = pathnames.map((_, index) => {
    const path = `/${pathnames.slice(0, index + 1).join("/")}`;
    return {
      label: pathnames[index],
      link: path,
    };
  });
  const isHome = location.pathname;

  return (
    <div
      className={`${isHome == "/" ? "hidden" : ""} w-full py-12 bg-black/10`}
    >
      <div className="container mx-auto w-[90%] lg:w-full flex flex-col justify-between md:flex-row gap-2 md:gap-0 px-4 md:px-0">
        <div className="uppercase font-semibold md:text-md sm:text-sm">
          Home
        </div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to={"/"} className={linkstyle.link}>
                Home
              </Link>
            </BreadcrumbItem>
            {breadcrumbItems.length !== 0 && <BreadcrumbSeparator />}
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <BreadcrumbSeparator />}{" "}
                {/* Separator between items */}
                <BreadcrumbItem
                  className={
                    breadcrumbItems.length - 1 === index ? "text-black" : ""
                  }
                >
                  <Link to={item.link} className={linkstyle.link}>
                    {item.label.replaceAll("%20", " ")}
                  </Link>
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default Breadcrumbs;
