import { useDispatch } from "react-redux";
import { logout } from "@/src/slice/authenticationSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate("/myaccount"); // Redirect to /myaccount after logout
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
