// // src/context/AuthContext.js
// import React, { createContext, useEffect, useState } from "react";
// import { auth } from "../config/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// // Create a context for authentication
// export const AuthContext = createContext();

// // Create a provider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // Track the authenticated user

//   useEffect(() => {
//     // Subscribe to authentication state changes
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log("User is signed in:", user);
//         setUser(user); // Update the user state
//       } else {
//         console.log("User is signed out");
//         setUser(null); // Clear the user state
//       }
//     });

//     return () => unsubscribe(); // Cleanup subscription on unmount
//   }, []);

//   return (
//     <>
//         console.log("Context value:", { user });
//       <AuthContext.Provider value={{ user }}>
//       {children}
//     </AuthContext.Provider>
//     </>
//   );
// };