import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { loginUser } from "../api/auth";
import "../Auth.css";

const DASHBOARD_URL =
  import.meta.env.VITE_DASHBOARD_URL;

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleError = (msg) =>
    toast.error(msg, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = inputValue;

    if (!email || !password) {
      return handleError("All fields are required");
    }

    try {
      const { data } = await loginUser(inputValue);

      const { success, message, user } = data;

      if (success) {
        if (user) {
          localStorage.setItem("zerrodhaUser", JSON.stringify(user));
        }

        handleSuccess(message);

        setInputValue({ email: "", password: "" });

        setTimeout(() => {
          window.location.href = DASHBOARD_URL;
        }, 1000);
      } else {
        handleError(message || "Login failed");
      }
    } catch (error) {
      handleError(
        error?.response?.data?.message || "Unable to log in right now"
      );
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Login Account</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={inputValue.email}
              placeholder="Enter email"
              onChange={handleOnChange}
              autoComplete="email"
            />
          </div>

          <div className="auth-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={inputValue.password}
              placeholder="Enter password"
              onChange={handleOnChange}
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>

          <span className="auth-switch">
            Don&apos;t have an account? <Link to="/signup">Signup</Link>
          </span>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;