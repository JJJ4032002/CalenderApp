import React, { useCallback, useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "../firebase/InitializeFirebase";
const auth = getAuth(app);

function useCurrUserListener(handleUser: (user: User | null) => void) {
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid);
        handleUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("User is signed out");
        handleUser(null);
      }
    });
    return () => {
      unsubscribe();
      console.log("unsubsribed");
    };
  }, [handleUser]);
}

export default useCurrUserListener;
