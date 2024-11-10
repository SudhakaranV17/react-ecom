import { IoNotifications } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "recharts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";

function Notifications() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="relative">
          <IoNotifications className="w-6 h-6 opacity-60 hover:bg-slate-200" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Tabs defaultValue="unread" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="archieved">Archieved</TabsTrigger>
            </TabsList>
            <TabsContent value="unread">
              <Link>
                <span className="flex gap-4 items-center p-3">
                  <BsFillCartCheckFill className="w-6 h-6" />
                  <span className="">
                    <span className="text-xl block leading-none">
                      New order received
                    </span>
                    <span className="text-sm">over 2 years ago</span>
                  </span>
                </span>
              </Link>
            </TabsContent>
            <TabsContent value="archieved">
              <Link>
                <span className="flex gap-4 items-center p-3">
                  <BsFillCartCheckFill className="w-6 h-6" />
                  <span className="">
                    <span className="text-xl block leading-none">
                      New order received
                    </span>
                    <span className="text-sm">over 2 years ago</span>
                  </span>
                </span>
              </Link>
            </TabsContent>
          </Tabs>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default Notifications;
