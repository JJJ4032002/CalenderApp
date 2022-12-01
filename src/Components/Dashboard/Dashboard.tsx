import React, { useState } from "react";
import { Navbar } from "../Elements/Navbar/Navbar";
import { Meeting } from "./Meeting";
import "./Dashboard.css";
import { Button } from "primereact/button";
function Dashboard() {
  let [displayBasic, setDisplayBasic] = useState(false);
  return (
    <>
      <Navbar SignOutButton={true}></Navbar>
      <hr></hr>
      <div className="DashboardHeader">
        <h1>Meetings</h1>
        <Button
          icon="pi pi-plus"
          className="p-button-rounded"
          aria-label="Add Meeting"
          onClick={() => {
            setDisplayBasic(true);
          }}
        />
      </div>

      <Meeting
        displayBasic={displayBasic}
        setDisplayBasic={setDisplayBasic}
      ></Meeting>
    </>
  );
}

export default Dashboard;
