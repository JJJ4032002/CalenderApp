import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Toast } from "primereact/toast";
import { app } from "./InitializeFirebase";
const auth = getAuth(app);

async function createUser(
  email: string,
  password: string,
  ref: React.MutableRefObject<null | Toast>
): Promise<boolean> {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return true;
      // ...
    })
    .catch((error) => {
      if (ref.current !== null) {
        ref.current.show({
          severity: "error",
          summary: "Failed to create account",
          detail: error.message,
          life: 3000,
        });
      }

      return false;
      // ..
    });
}

export default createUser;
