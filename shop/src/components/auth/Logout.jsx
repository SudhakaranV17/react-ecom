import { useDispatch } from "react-redux";
import { logout } from "@/src/slice/authenticationSlice";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ showButton = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/myaccount");
  };

  // If showButton is false, just dispatch the logout action and return null
  if (!showButton) {
    dispatch(logout());
    return null;
  }

  // Otherwise, render the Logout button
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
