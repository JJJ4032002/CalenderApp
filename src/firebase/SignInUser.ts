import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Toast } from "primereact/toast";
import { app } from "./InitializeFirebase";
const auth = getAuth(app);
async function SignInUser(
  email: string,
  password: string,
  ref: React.MutableRefObject<null | Toast>
) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      return true;
    })
    .catch((error) => {
      if (ref.current !== null) {
        ref.current.show({
          severity: "error",
          summary: "Incorrect email or password",
          detail: "Please enter correct details and try again",
          life: 3000,
        });
      }

      return false;
    });
}
export default SignInUser;
