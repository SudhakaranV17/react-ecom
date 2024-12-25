import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Register from "./Register";
import Login from "./Login";
import styled from "styled-components";
function UserAuth() {
  return (
    <div>
      <div className="">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2 gap-2">
            <TabsTrigger
              value="account"
              className="bg-black !text-white data-[state=active]:bg-white data-[state=active]:!text-black ring-1 ring-black"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="bg-black !text-white data-[state=active]:bg-white data-[state=active]:!text-black ring-1 ring-black"
            >
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Login />
              </CardContent>
              {/* <CardFooter>
                <Button>Save changes</Button>
              </CardFooter> */}
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Register />
              </CardContent>
              {/* <CardFooter>
                <Button>Save password</Button>
              </CardFooter> */}
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default UserAuth;
