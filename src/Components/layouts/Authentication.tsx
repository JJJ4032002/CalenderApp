import React from "react";
import { GridWrapper } from "../Elements/GridWrapper/GridWrapper";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { BannerWrapper } from "../Elements/BannerWrapper/BannerWrapper";
import { FormWrapper } from "../Elements/FormWrapper/FormWrapper";
import { Navbar } from "../Elements/Navbar/Navbar";
import { BannerImage } from "../Elements/BannerImage/BannerImage";
import "./Authentication.css";
export default function Authentication({
  AuthentictionStage,
  bannerImage,
  welcomeTextBlock,
}: {
  AuthentictionStage: "Sign Up" | "Sign In";
  bannerImage: string;
  welcomeTextBlock: React.ReactNode;
}) {
  return (
    <>
      <Navbar></Navbar>
      <GridWrapper>
        <BannerWrapper>
          <BannerImage bannerImage={bannerImage}></BannerImage>
        </BannerWrapper>
        <FormWrapper>
          <form className="AuthenticationForm" action="">
            {welcomeTextBlock}
            <span className="p-float-label">
              <InputText
                className="AuthenticationInput"
                id="UserName"
                value="Hello"
                name="UserName"
              />
              <label htmlFor="UserName">Username</label>
            </span>
            <span className="p-float-label">
              <InputText
                className="AuthenticationInput"
                id="Password"
                value="Hello"
                name="Password"
              />
              <label htmlFor="Password">Password</label>
            </span>
            <Button
              className="AuthenticationButton"
              label={AuthentictionStage}
            />
          </form>
        </FormWrapper>
      </GridWrapper>
    </>
  );
}
