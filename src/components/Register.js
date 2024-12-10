import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const validateEmailOrPhone = (value) => {
    const phoneRegex = /^(97|98)\d{8}$/; // 10-digit phone number starting with 97 or 98
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    return phoneRegex.test(value) || emailRegex.test(value);
  };

  const validatePassword = (value) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmailOrPhone(emailOrPhone)) {
      alert("Error: Please enter a valid email or phone number.");
      return;
    }

    if (!validatePassword(password)) {
      alert(
        "Error: Password must contain at least one uppercase letter, one special character, and one number."
      );
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon">📧</span>
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p>
          Not Registered Yet?{" "}
          <a href="#" className="signup-link">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
