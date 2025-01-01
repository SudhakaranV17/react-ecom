import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: function () { return !this.isGoogleAuth; },
    unique: true,
  },
  email: {
    type: String,
    required: function () { return !this.isGoogleAuth; },
    unique: true,
    match: /.+\@.+\..+/,
  },
  password: {
    type: String,
    required: function () { return !this.isGoogleAuth; }, // If the user is authenticated via Google, no password required
  },
  googleId: {
    type: String,
    unique: true, // The unique Google ID from OAuth
    sparse: true,  // Allows googleId to be unique but not required
  },
  googleEmail: {
    type: String,
    match: /.+\@.+\..+/,
    sparse: true, // This allows the field to be optional for users who don't authenticate with Google
  },
  profilePicture: {
    type: String, // URL to the profile picture (optional)
  },
  isGoogleAuth: {
    type: Boolean,
    default: false, // Indicates if the user authenticated using Google
  },
  mobile: {
    type: String,
    required: function () { return !this.isGoogleAuth; },  // Set to `true` if mobile number should be mandatory
    match: /^[0-9]{10}$/, // Validates that the mobile number is a 10-digit number (adjust regex for other formats)
    unique: true, // Ensures no two users have the same mobile number
    sparse: true, // Allows the mobile field to be optional
  },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);
export default User;
