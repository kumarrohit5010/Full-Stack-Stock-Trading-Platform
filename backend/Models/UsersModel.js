const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Your first name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Your last name is required"],
      trim: true,
    },
    age: {
      type: Number,
      required: [true, "Your age is required"],
      min: 13,
      max: 120,
    },
    gender: {
      type: String,
      required: [true, "Your gender is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Your email address is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Your username is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Your password is required"],
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);