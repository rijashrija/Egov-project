// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore,doc,setDoc,getDoc } from "firebase/firestore";
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt-fPHmXilseQL7YA51GSmwOSfJqlmkHI",
  authDomain: "my-app-476f3.firebaseapp.com",
  projectId: "my-app-476f3",
  storageBucket: "my-app-476f3.firebasestorage.app",
  messagingSenderId: "105788187613",
  appId: "1:105788187613:web:3247a2f115c48a5c92cc34",
  measurementId: "G-XGHDHRRNTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
const auth = getAuth(app);
const db = getFirestore(app);
const storage=getStorage(app);
// Export auth and RecaptchaVerifier
export { auth ,db,storage};
// const analytics = getAnalytics(app);