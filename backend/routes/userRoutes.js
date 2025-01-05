import express from "express";
import authenticate from "../middlewares/protectRoutes.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken"
const router = express.Router();

router.get("/dashboard", authenticate, (req, res) => {
    res.json({ message: `Welcome, ${req.user.email}!`, user: req.user });
});

router.get("/profile", authenticate, async (req, res) => {
    const token = req.cookies.auth_token;

    if (!token) {
        return res.status(401).send({ message: "Not logged in" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).send({ message: "User not found" });
        }
        const userData = {
            username: user?.username, email: user?.email, profilepic: user?.profilePicture, isGoogle: user?.isGoogleAuth
        }
        return res.status(200).send({ userData });
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(500).send("Authentication error");
    }
});

export default router;
