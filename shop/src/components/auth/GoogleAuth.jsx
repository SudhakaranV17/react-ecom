import { GoogleLogin } from "@react-oauth/google";
function GoogleAuth() {
  return (
    <div>
      <div className="">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            // console.log(credentialResponse);
            //
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
}

export default GoogleAuth;
