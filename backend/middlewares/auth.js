import { OAuth2Client } from "google-auth-library"; // Import the correct library
import User from "../models/userModel.js";
import generateToken from "../helper/generateToken.js";
import { Router } from "express";
// Configure Google OAuth client
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const googleClient = new OAuth2Client(CLIENT_ID);

const router = Router();

// POST route for Google login
router.post("/login", async (req, res) => {
    const { id_token } = req.body;

    if (!id_token) {
        return res.status(400).send("Missing ID token");
    }

    try {
        // Verify the ID token
        const ticket = await googleClient.verifyIdToken({
            idToken: id_token,
            audience: CLIENT_ID, // Specify the client ID
        });

        const payload = ticket.getPayload(); // Get the payload (user info)
        const { sub: googleId, email, name: username, picture: profilePicture } = payload;

        // Find or create the user
        let user = await User.findOne({ googleId }) || (await User.findOne({ email }));

        if (!user) {
            user = new User({
                username,
                email,
                googleId,
                profilePicture,
                isGoogleAuth: true,
            });
            await user.save();
        }
        const userData = {
            username: user?.username, email: user?.email, profilepic: user?.profilePicture, isGoogle: user?.isGoogleAuth
        }
        // Generate JWT token and set it as a secure cookie
        generateToken(user, res);
        res.status(200).send({ message: "Login successful", userData });
    } catch (err) {
        console.error("Authentication Error Server:", err);
        res.status(500).send("Authentication failed");
    }
});
// Logout
router.post("/logout", (req, res) => {
    res.clearCookie("auth_token");
    res.status(200).send("Logged out Successfully");
});

export default router;
