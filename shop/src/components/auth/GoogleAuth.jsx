import { checkLoginStatus } from "@/src/slice/authenticationSlice";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
function GoogleAuth() {
  //
  const dispatch = useDispatch();
  const handleSuccess = async (credentialResponse) => {
    // console.log(credentialResponse);
    try {
      // send token to backend
      const { data } = await axios.post(
        "http://localhost:7000/auth/login",
        { id_token: credentialResponse.credential },
        { withCredentials: true } // To handle cookies securely
      );
      // console.log("login successfull ", data);
      dispatch(checkLoginStatus());
    } catch (error) {
      console.log(
        "Authenticatin Error Client: ",
        error.response?.data || error.message
      );
    }
  };

  //
  const handleError = () => {
    console.log("Error in frontend");
  };

  return (
    <div>
      <div className="">
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      </div>
    </div>
  );
}

export default GoogleAuth;
