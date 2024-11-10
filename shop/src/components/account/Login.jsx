import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-[50%] mx-auto mt-8">
      <form id="login_form" className="flex flex-col gap-12">
        <div className="">
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            placeholder="Enter Your Email"
            className="px-0 mt-3"
            type="email"
            required
          />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            placeholder="Enter Your Password"
            className="px-0 mt-3"
            type="password"
            required
          />
        </div>
      </form>
      <Button className="px-6 py-4 mt-10 uppercase font-semibold tracking-wider text-sm">
        Login
      </Button>
      <Link
        to={"passwordReset"}
        className="text-sm ms-6 underline hover:text-black/70 duration-300 transition-all"
      >
        Lost your password?
      </Link>
    </div>
  );
}

export default Login;
