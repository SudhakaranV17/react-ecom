import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Notifications from "./notifications/Notifications";
import User from "./User/User";

function Header() {
  return (
    <div className="flex justify-between py-8 px-16">
      <div className="">
        <Link
          to={"/"}
          variant="secondary"
          className={clsx(buttonVariants({ variant: "secondary" }))}
        >
          Browse Website
        </Link>
      </div>
      <div className="flex gap-8 items-center">
        <div className="relative ">
          <Input
            type="text"
            placeholder="Search"
            className="bg-slate-100 focus-visible:ring-offset-0"
          ></Input>
        </div>
        <div className="">
          <Notifications />
        </div>
        <div className="">
          <User />
        </div>
      </div>
    </div>
  );
}

export default Header;
