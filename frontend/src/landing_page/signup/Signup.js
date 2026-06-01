import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../Auth.css";

const LOCAL_API_BASE_URL = "http://localhost:3002";

const API_BASE_URL =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1")
    ? LOCAL_API_BASE_URL
    : process.env.REACT_APP_API_URL || LOCAL_API_BASE_URL;

const initialFormValues = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  email: "",
  otp: "",
  password: "",
};

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);

  const { firstName, lastName, age, gender, email, otp, password } = formValues;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    if (name === "otp") {
      setOtpVerified(false);
    }
  };

  const handleError = (message) =>
    toast.error(message, {
      position: "bottom-left",
    });

  const handleSuccess = (message) =>
    toast.success(message, {
      position: "bottom-right",
    });

  const sendOtp = async () => {
    if (!firstName || !lastName || !age || !gender || !email) {
      handleError("First name, last name, age, gender and email are required");
      return;
    }

    setIsSendingOtp(true);
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/signup/send-otp`,
        {
          firstName,
          lastName,
          age,
          gender,
          email,
        },
        { withCredentials: true }
      );

      if (data.success) {
        handleSuccess(data.message || "OTP sent to your email");
        setStep(2);
      } else {
        handleError(data.message || "Unable to send OTP");
      }
    } catch (error) {
      handleError(
        error?.response?.data?.message || "Unable to send OTP right now"
      );
    } finally {
      setIsSendingOtp(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      handleError("Enter the OTP sent to your email");
      return;
    }

    setIsVerifyingOtp(true);
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/signup/verify-otp`,
        {
          email,
          otp,
        },
        { withCredentials: true }
      );

      if (data.success) {
        setOtpVerified(true);
        handleSuccess(data.message || "OTP verified successfully");
      } else {
        handleError(data.message || "OTP verification failed");
      }
    } catch (error) {
      handleError(
        error?.response?.data?.message || "Unable to verify OTP right now"
      );
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const createAccount = async () => {
    if (!password) {
      handleError("Password is required");
      return;
    }

    if (!otpVerified) {
      handleError("Verify the OTP before setting the password");
      return;
    }

    setIsSubmitting(true);
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/signup`,
        {
          firstName,
          lastName,
          age,
          gender,
          email,
          password,
        },
        { withCredentials: true }
      );

      if (data.success) {
        handleSuccess(data.message || "Signup completed successfully");
        setFormValues(initialFormValues);
        setOtpVerified(false);
        setStep(1);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(data.message || "Signup failed");
      }
    } catch (error) {
      handleError(
        error?.response?.data?.message || "Unable to sign up right now"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      sendOtp();
      return;
    }

    if (step === 2) {
      verifyOtp();
      return;
    }

    createAccount();
  };

  const goToPasswordStep = () => {
    if (!otpVerified) {
      handleError("Verify the OTP before continuing");
      return;
    }

    setStep(3);
  };

  return (
    <div className="auth-page">
      <div className="auth-card auth-card-large">
        <div className="auth-stepper">
          <span>Step {step} of 3</span>
          <p>
            {step === 1 && "Create your profile"}
            {step === 2 && "Verify your email"}
            {step === 3 && "Set your password"}
          </p>
        </div>

        <h2 className="auth-title">Signup Account</h2>

        <form onSubmit={handleFormSubmit} className="auth-form">
          {step === 1 && (
            <>
              <div className="auth-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  placeholder="Enter your first name"
                  autoComplete="given-name"
                  onChange={handleOnChange}
                />
              </div>

              <div className="auth-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  placeholder="Enter your last name"
                  autoComplete="family-name"
                  onChange={handleOnChange}
                />
              </div>

              <div className="auth-field">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={age}
                  min="1"
                  max="120"
                  placeholder="Enter your age"
                  inputMode="numeric"
                  onChange={handleOnChange}
                />
              </div>

              <div className="auth-field">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={handleOnChange}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

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

              <button
                type="submit"
                className="auth-button"
                disabled={isSendingOtp}
              >
                {isSendingOtp ? "Sending OTP..." : "Next"}
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="auth-summary">
                <p>{`${firstName} ${lastName}`.trim()}</p>
                <span>{email}</span>
              </div>

              <div className="auth-field">
                <label htmlFor="otp">OTP</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={otp}
                  placeholder="Enter the OTP sent to your email"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  onChange={handleOnChange}
                />
              </div>

              <div className="auth-actions">
                <button
                  type="submit"
                  className="auth-button"
                  disabled={isVerifyingOtp}
                >
                  {isVerifyingOtp ? "Verifying..." : "Verify OTP"}
                </button>

                <button
                  type="button"
                  className="auth-button auth-button-secondary"
                  onClick={goToPasswordStep}
                  disabled={!otpVerified}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="auth-summary">
                <p>{`${firstName} ${lastName}`.trim()}</p>
                <span>{email}</span>
              </div>

              <div className="auth-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Set your password"
                  autoComplete="new-password"
                  onChange={handleOnChange}
                />
              </div>

              <button
                type="submit"
                className="auth-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating account..." : "Create Account"}
              </button>
            </>
          )}

          <span className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
