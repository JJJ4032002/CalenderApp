import React, { useEffect, useState } from "react";
import "./App.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/md-light-indigo/theme.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
  let location = useLocation();
  let [FirstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    if (FirstLoad) {
      setFirstLoad(false);
    }
  }, [FirstLoad]);
  return (
    <div className="App">
      {location.pathname === "/" && FirstLoad && <Navigate to="signin" />}
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>} />
        <Route path="signin" element={<SignIn></SignIn>} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
