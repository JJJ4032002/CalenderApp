import React, { useState, useRef } from "react";
import bannerImage2 from "../../assets/BannerImg2.svg";
import Authentication from "../layouts/Authentication";
import createUser from "../../firebase/CreateUser";
import { Link } from "react-router-dom";
import { Toast } from "primereact/toast";
export default function SignUp() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  let toast = useRef(null);
  function handleUserData(name: "email" | "password", value: string) {
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  async function handleSignUp(email: string, password: string) {
    let success = await createUser(email, password, toast);
    return success;
  }
  return (
    <>
      <Authentication
        AuthentictionStage="Sign Up"
        bannerImage={bannerImage2}
        welcomeTextBlock={
          <div className="WelcomeText">
            <h2>Welcome back !</h2>
            <p>
              Already have an account? Click here to{" "}
              <Link to="/signin">Sign In</Link>
            </p>
          </div>
        }
        userData={userData}
        handleUserData={handleUserData}
        submitFunc={handleSignUp}
      ></Authentication>
      <Toast ref={toast} />
    </>
  );
}
