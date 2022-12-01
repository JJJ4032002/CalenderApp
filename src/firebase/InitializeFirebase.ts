import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtr5Jr0wIMhDVK2FORWdrIQMTM376ZTEc",
  authDomain: "calenderapp-98ed6.firebaseapp.com",
  projectId: "calenderapp-98ed6",
  storageBucket: "calenderapp-98ed6.appspot.com",
  messagingSenderId: "1027579887939",
  appId: "1:1027579887939:web:684a6264cd80dc01b66ff6",
  measurementId: "G-5XBQ7MK1HQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app };
