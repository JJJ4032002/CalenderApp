import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import SignOutUser from "../../../firebase/SignOut";
export const Navbar = ({ SignOutButton }: { SignOutButton: boolean }) => {
  let navigate = useNavigate();
  function handleSignOut() {
    SignOutUser(navigate);
  }
  return (
    <nav className="Nav">
      <h1>Arrange</h1>
      {SignOutButton && <Button label="Sign Out" onClick={handleSignOut} />}
    </nav>
  );
};
