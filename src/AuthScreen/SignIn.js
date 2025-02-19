import React from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import { login } from "../Redux/authSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign In</h2>
      <div style={styles.googleLoginContainer}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            dispatch(login(credentialResponse));
            navigate("/dashboard");
          }}
          onError={() => console.log("Login Failed")}
        />
      </div>
      <div style={styles.signupContainer}>
        <p style={styles.text}>
          Don't have an account? 
          <button style={styles.signupButton} onClick={() => navigate("/signup")}>Sign Up</button>
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
  googleLoginContainer: {
    marginBottom: "20px",
  },
  signupContainer: {
    marginTop: "10px",
  },
  text: {
    fontSize: "16px",
    color: "#555",
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

export default SignIn;
