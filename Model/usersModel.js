const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName:  { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    DOB: { type: String, required: true },
    relocatte: { type: Boolean, default: false },
    introduction: { type: String },
    image: {
      type: String,
      default:
        "https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png",
    },
    marital_status: { type: String },
    body_type: { type: String },
    language: { type: String },
    race: { type: String },
    distance: { type: String },
    sexual_orientation: { type: String },
    looking_for: { type: String },
    age: { type: String },
    role: { type: String, default: "user", enum: ["user", "model", "admin"] },
    gender: { type: String },
    country: { type: String },
    booking_by: { type: String },
    booking_price: { type: String },
    followers: [{ type: String }],
    paymentUser: { type: String },
    album: [{ name: String, images: [String] }],
    images: [{ type: String, required: true }],
    videos: [{ type: String, required: true }],
    isLive: { type: Boolean, default: false },
    isModel: { type: Boolean, default: false },
    wallet: { type: Number, default: 0 },
    token: { type: String },
    otp: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
