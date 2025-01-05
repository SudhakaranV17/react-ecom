import { useEffect, useState } from "react";
import UserData from "./UserData";
import UserAuth from "../auth/UserAuth";
import { checkLoginStatus } from "@/src/slice/authenticationSlice";
import { useSelector, useDispatch } from "react-redux";
function MyAccount() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, [dispatch]);

  return (
    <div>
      <div className="">{user?.username ? <UserData /> : <UserAuth />}</div>
    </div>
  );
}

export default MyAccount;
