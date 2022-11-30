import React from "react";
import bannerImage2 from "../../assets/BannerImg2.svg";
import Authentication from "../layouts/Authentication";
export default function SignUp() {
  return (
    <Authentication
      AuthentictionStage="Sign Up"
      bannerImage={bannerImage2}
      welcomeTextBlock={
        <div className="WelcomeText">
          <h2>Welcome back !</h2>
          <p>Don't have an account, Click here to Sign Up</p>
        </div>
      }
    ></Authentication>
  );
}
