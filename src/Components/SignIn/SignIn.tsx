import React from "react";
import bannerImage from "../../assets/BannerImg.svg";
import Authentication from "../layouts/Authentication";
export default function SignIn() {
  return (
    <Authentication
      AuthentictionStage="Sign In"
      bannerImage={bannerImage}
      welcomeTextBlock={
        <div className="WelcomeText">
          <h2>Welcome back !</h2>
          <p>Don't have an account, Click here to Sign Up</p>
        </div>
      }
    ></Authentication>
  );
}
