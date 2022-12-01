import React, { useRef, useState } from "react";
import bannerImage from "../../assets/BannerImg.svg";
import Authentication from "../layouts/Authentication";
import SignInUser from "../../firebase/SignInUser";
import { Toast } from "primereact/toast";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  let toast = useRef(null);
  function handleUserData(name: "email" | "password", value: string) {
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function handleUserSignIn(email: string, password: string) {
    let success = await SignInUser(email, password, toast);
    return success;
  }
  return (
    <>
      <Authentication
        AuthentictionStage="Sign In"
        bannerImage={bannerImage}
        welcomeTextBlock={
          <div className="WelcomeText">
            <h2>Welcome back !</h2>
            <p>
              Don't have an account, Click here to{" "}
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        }
        userData={userData}
        handleUserData={handleUserData}
        submitFunc={handleUserSignIn}
      ></Authentication>
      <Toast ref={toast} />
    </>
  );
}
