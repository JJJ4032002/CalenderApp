import { User } from "firebase/auth";
import React, { createContext, useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useCurrUserListener from "../hooks/useCurrUserListener";
interface userContextType {
  user: User | null;
}
let userContext = createContext<userContextType | null>(null);
function UserProvider({ children }: { children: React.ReactNode }) {
  let location = useLocation();
  let navigate = useNavigate();
  let [user, setUser] = useState<null | User>(null);
  let [alreadyNavigated, setAlreadyNavigated] = useState(false);
  const handleUser = useCallback((user: User | null) => {
    setUser(user);
  }, []);

  useEffect(() => {
    if (user !== null && location.pathname !== "/" && !alreadyNavigated) {
      console.log("This ran");
      navigate("/");
      setAlreadyNavigated(true);
    }
    if (user === null && alreadyNavigated) {
      setAlreadyNavigated(false);
    }
  }, [user, location, alreadyNavigated, navigate]);
  useCurrUserListener(handleUser);
  let contextObj = { user: user };

  return (
    <userContext.Provider value={contextObj}>{children}</userContext.Provider>
  );
}

export default UserProvider;
