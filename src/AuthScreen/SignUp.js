import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const SignUp = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    console.log("Google User Info:", decoded);
    navigate("/dashboard");
  };

  const handleGoogleFailure = () => {
    console.log("Google Sign-Up Failed");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Up</h2>
      <p style={styles.text}>Sign up with Google</p>
      <div style={styles.googleLoginContainer}>
        <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />
      </div>
      <div style={styles.signupContainer}>
        <p style={styles.text}>
          Already have an account? 
          <button style={styles.signupButton} onClick={() => navigate("/signin")}>Sign In</button>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  text: {
    fontSize: "16px",
    color: "#555",
  },
  googleLoginContainer: {
    marginBottom: "20px",
  },
  signupContainer: {
    marginTop: "10px",
  },
  signupButton: {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "8px 12px",
    marginLeft: "10px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "4px",
    transition: "background 0.3s",
  },
};

export default SignUp;
