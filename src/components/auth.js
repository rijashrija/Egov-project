import { useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./Login";
const App = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in:", user);
      } else {
        console.log("User is signed out");
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
};

export default App;