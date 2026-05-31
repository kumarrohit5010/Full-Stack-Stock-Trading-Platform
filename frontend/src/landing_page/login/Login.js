import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../Auth.css";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return handleError("All fields are required");
    }

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message, user } = data;
      if (success) {
        if (user) {
          localStorage.setItem("zerrodhaUser", JSON.stringify(user));
        }
        handleSuccess(message);
        setTimeout(() => {
          window.location.assign(DASHBOARD_URL);
        }, 1000);
      } else {
        handleError(message || "Login failed");
      }
    } catch (error) {
      handleError(error?.response?.data?.message || "Unable to log in right now");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
      <h2 className="auth-title">Login Account</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="auth-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            autoComplete="email"
            onChange={handleOnChange}
          />
        </div>
        <div className="auth-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            autoComplete="current-password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="auth-button">Submit</button>
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