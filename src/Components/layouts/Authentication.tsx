import React, { useState } from "react";
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
  userData,
  handleUserData,
  submitFunc,
}: {
  AuthentictionStage: "Sign Up" | "Sign In";
  bannerImage: string;
  welcomeTextBlock: React.ReactNode;
  userData: { email: string; password: string };
  handleUserData: (name: "email" | "password", value: string) => void;
  submitFunc: (email: string, password: string) => Promise<boolean>;
}) {
  let { email, password } = userData;
  const [errors, setErrors] = useState({ email: false, password: false });
  const [loading, setLoading] = useState(false);
  let pattern = /^\S+@\S+\.\S+$/;
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    let name = event.currentTarget.name;
    let value = event.target.value;
    if (
      (name === "email" && value === "") ||
      (name === "password" && value === "") ||
      (name === "email" && pattern.test(value) === false)
    ) {
      setErrors((prev) => {
        return { ...prev, [name]: true };
      });
    } else if (
      (name === "email" && value) ||
      (name === "password" && value) ||
      (name === "email" && pattern.test(value) === true)
    ) {
      setErrors((prev) => {
        return { ...prev, [name]: false };
      });
    }
    if (name === "email" || name === "password") {
      handleUserData(name, event.target.value);
    }
  }

  async function handleSubmitButton(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    setLoading(true);
    await submitFunc(email, password);
    setLoading(false);
  }

  let disabled =
    email === "" || password === "" || pattern.test(email) === false
      ? true
      : false;
  return (
    <>
      <Navbar SignOutButton={false}></Navbar>
      <GridWrapper>
        <BannerWrapper>
          <BannerImage bannerImage={bannerImage}></BannerImage>
        </BannerWrapper>
        <FormWrapper>
          <form className="AuthenticationForm" action="">
            {welcomeTextBlock}
            <div className="InputBlock">
              <span className="p-float-label">
                <InputText
                  className={`AuthenticationInput ${
                    errors.email ? "p-invalid block" : ""
                  }`}
                  id="email"
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  autoComplete="email"
                />
                <label htmlFor="email">Email</label>
              </span>
              {errors.email && (
                <small id="username2-help" className="p-error block">
                  Enter a valid email
                </small>
              )}
            </div>
            <div className="InputBlock">
              <span className="p-float-label">
                <InputText
                  className={`AuthenticationInput ${
                    errors.password ? "p-invalid block" : ""
                  }`}
                  id="password"
                  value={password}
                  name="password"
                  onChange={handleInputChange}
                  type="password"
                  autoComplete="current-password"
                />
                <label htmlFor="password">Password</label>
              </span>
              {errors.password && (
                <small id="username2-help" className="p-error block">
                  Password can't be empty
                </small>
              )}
            </div>
            <Button
              className="AuthenticationButton"
              label={AuthentictionStage}
              disabled={disabled}
              onClick={handleSubmitButton}
              loading={loading}
            />
          </form>
        </FormWrapper>
      </GridWrapper>
    </>
  );
}
