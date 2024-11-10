import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Link } from "react-router-dom";
import "./account.scss";
function Register() {
  return (
    <>
      <div className="w-full">
        <p className="w-full text-sm text-black/40 mb-4">
          If you already have an account with us, please login at the{" "}
          <Link to={"/account"} className="text-black/80 underline">
            login page.
          </Link>
        </p>
        <form id="register_form" className="flex flex-col gap-6">
          <div className="info">
            <h2 className="text-xl font-normal mb-2">Your Personal Details</h2>
            <Separator className="bg-black/40" />
          </div>
          <div className="">
            <label htmlFor="username">First Name</label>
            <Input
              name="firstname"
              placeholder="Enter firstname"
              className="px-3 border border-black/10"
              type="email"
              required
            />
          </div>
          <div className="">
            <label htmlFor="username">Last Name</label>
            <Input
              name="lastname"
              placeholder="Enter lastname"
              className="px-3 border border-black/10"
              type="email"
              required
            />
          </div>
          <div className="">
            <label htmlFor="email">Email</label>
            <Input
              name="email"
              placeholder="Enter Email"
              className="px-3 border border-black/10"
              type="email"
              required
            />
          </div>
          <div className="">
            <label htmlFor="mobile">Mobile</label>
            <Input
              name="mobile"
              placeholder="Enter Mobile"
              className="px-3 border border-black/10"
              type="text"
              maxLength={10}
              required
            />
          </div>
          <div className="info">
            <h2 className="text-xl font-normal mb-2">Your Password</h2>
            <Separator className="bg-black/40" />
          </div>
          <div className="">
            <label htmlFor="password">Password</label>
            <Input
              name="password"
              placeholder="Enter Password"
              className="px-3 border border-black/10"
              type="password"
              required
            />
          </div>
          <div className="">
            <label htmlFor="cpassword">Confirm Password</label>
            <Input
              name="cpassword"
              placeholder="Enter Password Again"
              className="px-3 border border-black/10"
              type="password"
              required
            />
          </div>
        </form>
        <Button className="px-6 py-4 mt-10 uppercase font-semibold tracking-wider text-sm">
          Register
        </Button>
      </div>
    </>
  );
}

export default Register;
