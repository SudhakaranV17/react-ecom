import { config } from "dotenv";
config();
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import auth from "./middlewares/auth.js"
import conncetDb from "./db/connectdb.js";
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
// app
const app = express();

// middleware
// CORS configuration
const corsOptions = {
  origin: "http://localhost:3001", // Replace with your frontend's URL
  credentials: true, // Allow cookies and other credentials
  methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
  allowedHeaders: "Content-Type,Authorization", // Allowed headers
};
app.use(cors(corsOptions));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());

// routes
app.use("/auth", auth);
app.use("/shop", userRoutes)
// test route
app.use("/", (req, res) => {
  res.send("hello 2");
});
// server
app.listen(process.env.PORT || 7000, () => {
  conncetDb();
  console.log("server connected", process.env.PORT);
});
