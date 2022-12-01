import { getAuth, signOut } from "firebase/auth";
import { NavigateFunction } from "react-router-dom";
import { app } from "./InitializeFirebase";

const auth = getAuth(app);
function SignOutUser(navigate: NavigateFunction) {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      navigate("/signin");
    })
    .catch((error) => {
      // An error happened.
    });
}

export default SignOutUser;
