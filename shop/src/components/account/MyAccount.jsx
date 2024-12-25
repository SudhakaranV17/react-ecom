import { useState } from "react";
import UserData from "./UserData";
import UserAuth from "../auth/UserAuth";

function MyAccount() {
  const [userpresent, setUserPresent] = useState(false);
  return (
    <div>
      <div className="">{userpresent ? <UserData /> : <UserAuth />}</div>
    </div>
  );
}

export default MyAccount;
