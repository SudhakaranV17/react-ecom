import jwt from "jsonwebtoken";

const generateToken = async (user, res) => {
  const token = jwt.sign({ id: user._id, email: user.email, googleId: user.googleId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  await res.cookie("auth_token", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
    security: process.env.NODE_ENV !== "development",
  });
};
export default generateToken;
