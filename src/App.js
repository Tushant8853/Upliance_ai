import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SignIn from "./AuthScreen/SignIn";
import SignUp from "./AuthScreen/SignUp";
import Dashboard from "./Screens/Dashboard";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="923137102354-76priih6u1m8cann17v54pn7ctqloeve.apps.googleusercontent.com">
        <Router>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/signin" />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </Provider>
  );
};

export default App;
