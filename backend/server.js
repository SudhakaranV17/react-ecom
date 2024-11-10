import express from "express";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import userRoutes from "./routes/userRoutes.js";
configDotenv();

// app
const app = express();

// middleware
app.use(cookieParser());

// routes
app.use("/user", userRoutes);

// test route
app.use("/", (req, res) => {
  res.send("hello");
});
// server
app.listen(process.env.PORT || 3000, () => {
  console.log("server connected");
});
