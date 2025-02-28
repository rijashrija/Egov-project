// src/components/Login.js
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import './Register.css';

export const getLoggedInUserEmail = () => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user.email); // Resolve with the user's email
      } else {
        resolve(null); // No user is logged in
      }
      unsubscribe(); // Stop listening after the first change
    });
  });
};
const Login = () => {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
 
      
      
  // Sign in with email and password
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setMessage("User logged in successfully!");
      console.log("User:", user);
      navigate("/form");
    } catch (error) {
      setError(error.message);
    }
  };

  // Sign up with email and password
  // const handleSignUp = async () => {
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     const user = userCredential.user;
  //     setMessage("User signed up successfully!");
  //     console.log("User:", user);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  return (
    <div className="login">
      <br />
      <h2>Login Form</h2>

      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
<br />
      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
<br />
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleSignUp}>Sign Up</button> */}

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <br /><br />
    </div>
  );
};

export default Login;