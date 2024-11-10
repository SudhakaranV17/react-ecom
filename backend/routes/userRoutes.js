import express from "express";
import { signup } from "../controllers/userController.js"; // Adjust the path if necessary

const router = express.Router();

router.post("/add", signup);

export default router;
