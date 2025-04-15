import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
