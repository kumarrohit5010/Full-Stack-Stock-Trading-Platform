const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/UsersModel");
const { createSecretToken } = require("../Utils/SecretToken");

// ================= CONFIG =================
const OTP_TTL_MS = 10 * 60 * 1000;
const otpStore = new Map();

// ================= HELPERS =================
const normalizeEmail = (email = "") => email.trim().toLowerCase();
const normalizeOtp = (otp = "") => String(otp).trim();

const generateOtp = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const getSender = () => {
  const rawFromEmail = process.env.FROM_EMAIL || "no-reply@example.com";
  const match = rawFromEmail.match(/^(.*)<(.+)>$/);

  if (match) {
    return {
      name: match[1].trim(),
      email: match[2].trim(),
    };
  }

  return {
    name: "Zerrodha",
    email: rawFromEmail.trim(),
  };
};

const safeUserResponse = (user) => ({
  id: user._id,
  firstName: user.firstName,
  lastName: user.lastName,
  age: user.age,
  gender: user.gender,
  email: user.email,
  username: user.username,
  createdAt: user.createdAt,
});

const setAuthCookie = (res, token) => {
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 3 * 24 * 60 * 60 * 1000,
  });
};

const clearOtpRecord = (email) => {
  otpStore.delete(normalizeEmail(email));
};

const getOtpRecord = (email) => {
  const record = otpStore.get(normalizeEmail(email));
  if (!record) return null;

  if (record.expiresAt <= Date.now()) {
    otpStore.delete(normalizeEmail(email));
    return null;
  }

  return record;
};

// ================= BREVO EMAIL =================
const sendBrevoOtpEmail = async ({ email, otp, firstName }) => {
  if (!process.env.BREVO_API_KEY) {
    throw new Error("BREVO_API_KEY missing");
  }

  const sender = getSender();

  const response = await fetch(
    "https://api.brevo.com/v3/smtp/email",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender,
        to: [{ email }],
        subject: "Your Zerrodha verification code",
        htmlContent: `
          <div style="font-family:Arial;line-height:1.6;color:#0f172a">
            <h2>Verify your email</h2>
            <p>Hi ${firstName || "there"},</p>
            <p>Your OTP is:</p>
            <div style="font-size:28px;font-weight:bold;letter-spacing:6px;">
              ${otp}
            </div>
            <p>This code expires in 10 minutes.</p>
          </div>
        `,
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to send OTP email");
  }
};

// ================= CONTROLLERS =================

// SEND OTP
const sendSignupOtp = async (req, res) => {
  try {
    const { firstName, lastName, age, gender, email } = req.body || {};
    const normalizedEmail = normalizeEmail(email);

    if (!firstName || !lastName || !age || !gender || !normalizedEmail) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const numericAge = Number(age);
    if (Number.isNaN(numericAge) || numericAge < 13 || numericAge > 120) {
      return res.status(400).json({
        success: false,
        message: "Invalid age",
      });
    }

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const otp = generateOtp();

    await sendBrevoOtpEmail({
      email: normalizedEmail,
      otp,
      firstName: firstName.trim(),
    });

    otpStore.set(normalizedEmail, {
      profile: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        age: numericAge,
        gender: gender.trim(),
        email: normalizedEmail,
      },
      otp,
      attempts: 0,
      verified: false,
      expiresAt: Date.now() + OTP_TTL_MS,
    });

    return res.json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to send OTP",
    });
  }
};

// VERIFY OTP
const verifySignupOtp = (req, res) => {
  const { email, otp } = req.body || {};
  const normalizedEmail = normalizeEmail(email);
  const normalizedOtp = normalizeOtp(otp);

  if (!normalizedEmail || !normalizedOtp) {
    return res.status(400).json({
      success: false,
      message: "Email and OTP required",
    });
  }

  const record = getOtpRecord(normalizedEmail);

  if (!record) {
    return res.status(404).json({
      success: false,
      message: "OTP expired or not found",
    });
  }

  if (record.otp !== normalizedOtp) {
    record.attempts += 1;

    if (record.attempts >= 5) {
      clearOtpRecord(normalizedEmail);
      return res.status(429).json({
        success: false,
        message: "Too many attempts. Request new OTP.",
      });
    }

    otpStore.set(normalizedEmail, record);

    return res.status(400).json({
      success: false,
      message: "Invalid OTP",
    });
  }

  record.verified = true;
  record.verifiedAt = Date.now();
  otpStore.set(normalizedEmail, record);

  return res.json({
    success: true,
    message: "OTP verified successfully",
  });
};

// SIGNUP
const signup = async (req, res) => {
  try {
    const { firstName, lastName, age, gender, email, password } =
      req.body || {};

    const normalizedEmail = normalizeEmail(email);

    if (
      !firstName ||
      !lastName ||
      !age ||
      !gender ||
      !normalizedEmail ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    const numericAge = Number(age);
    if (Number.isNaN(numericAge) || numericAge < 13 || numericAge > 120) {
      return res.status(400).json({
        success: false,
        message: "Invalid age",
      });
    }

    const record = getOtpRecord(normalizedEmail);

    if (!record || !record.verified) {
      return res.status(400).json({
        success: false,
        message: "Verify OTP first",
      });
    }

    const profile = record.profile;

    if (
      profile.firstName !== firstName.trim() ||
      profile.lastName !== lastName.trim() ||
      profile.gender !== gender.trim() ||
      profile.email !== normalizedEmail ||
      Number(profile.age) !== numericAge
    ) {
      return res.status(400).json({
        success: false,
        message: "Signup data mismatch",
      });
    }

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      clearOtpRecord(normalizedEmail);
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      age: numericAge,
      gender: gender.trim(),
      email: normalizedEmail,
      username: normalizedEmail,
      password, // hashed by Mongoose pre-save hook
    });

    clearOtpRecord(normalizedEmail);

    const token = createSecretToken(user._id);
    setAuthCookie(res, token);

    return res.json({
      success: true,
      message: "Signup successful",
      user: safeUserResponse(user),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Signup failed",
    });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body || {};
    const normalizedEmail = normalizeEmail(email);

    if (!normalizedEmail || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password required",
      });
    }

    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = createSecretToken(user._id);
    setAuthCookie(res, token);

    return res.json({
      success: true,
      message: "Login successful",
      user: safeUserResponse(user),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Login failed",
    });
  }
};

// CURRENT USER
const currentUser = async (req, res) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.json({ status: false, user: null });
    }

    if (!process.env.TOKEN_KEY) {
      throw new Error("TOKEN_KEY missing");
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.json({ status: false, user: null });
    }

    return res.json({
      status: true,
      user: safeUserResponse(user),
    });
  } catch {
    return res.json({ status: false, user: null });
  }
};

// LOGOUT
const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return res.json({
    success: true,
    message: "Logged out successfully",
  });
};

module.exports = {
  currentUser,
  login,
  logout,
  sendSignupOtp,
  signup,
  verifySignupOtp,
};