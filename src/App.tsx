import React from "react";
import "./App.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/md-light-indigo/theme.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
function App() {
  let location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/" && <Navigate to="signin" />}
      <Routes>
        <Route path="signin" element={<SignIn></SignIn>} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
