import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

// routes
import customerRoutes from "./routes/customer.routes.js";
import restaurantRoutes from "./routes/restaurant.routes.js";
import adminRoutes from "./routes/admin.routes.js"
import complaintRoutes from "./routes/complaint.routes.js"
import productRoutes from "./routes/product.route.js"

const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/customer", customerRoutes);
app.use("/api/restaurant", restaurantRoutes);
app.use("/api/admin", adminRoutes)
app.use("/api/complaint", complaintRoutes)
app.use("/api/product", productRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
