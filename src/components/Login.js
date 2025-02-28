import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router"; // Import useNavigate
import { uploadImage, checkVerificationStatus } from "../utils/cloudinary";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import './Login.css';
function Register() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [citizenshipNumber, setCitizenshipNumber] = useState("");
  const [citizenshipImage, setCitizenshipImage] = useState(null);
  const [publicId, setPublicId] = useState(null);

  // Polling to check verification status
  useEffect(() => {
    if (!publicId) return;

    const interval = setInterval(async () => {
      console.log("Checking verification status for publicId:", publicId);
      const verified = await checkVerificationStatus(publicId);
      console.log("Verification status:", verified);
      if (verified) {
        setIsVerified(true);
        clearInterval(interval); // Stop polling once verified

        // Navigate to the form page
        navigate('/register')
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [publicId,navigate]); // Add navigate to the dependency array

  // Function to handle sign-up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!citizenshipNumber || !citizenshipImage) {
      setError("Citizenship number and image are required.");
      return;
    }
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email,password);
      console.log("User created:", userCredential.user);
      // Step 1: Upload the citizenship card image to Cloudinary
      const uploadedPublicId = await uploadImage(citizenshipImage);
      setPublicId(uploadedPublicId); // Store the public ID for polling

      // Step 2: Check if the image is verified
      const isVerified = await checkVerificationStatus(uploadedPublicId);
      if (!isVerified) {
        setError("Your citizenship card image is not verified yet. Please wait for admin approval.");
        return;
      }
// Step 3: Create the user in Firebase



      // Step 3: Display success message
      setMessage("User signed up successfully!");
      navigate("/register");
    } catch (error) {
      setError(error.message);
      console.error("Sign-up error:", error.message);
    }
  };

  return (
    <div className="register">
      <br />
      <h2>Register</h2>
<br /><br />
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
      <div>
        <label>Citizenship Number:</label>
        <input
          type="text"
          placeholder="Enter your citizenship number"
          value={citizenshipNumber}
          onChange={(e) => setCitizenshipNumber(e.target.value)}
        />
      </div>
<br />
      <div>
        <label>Citizenship Card Picture:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCitizenshipImage(e.target.files[0])}
        />
      </div>
<br />
      <button onClick={handleSignUp}>Sign Up</button>

   

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <br /><br />
    </div>
  );
}

export default Register;