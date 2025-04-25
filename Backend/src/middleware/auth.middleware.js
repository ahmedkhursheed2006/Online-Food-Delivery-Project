import jwt from "jsonwebtoken";
import Customer from "../models/customer.model.js";
import Restaurant from "../models/restaurant.model.js";
import Admin from "../models/admin.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    // Try Customer first
    let entity = await Customer.findById(decoded.id).select("-password");

    // If not a customer, try Restaurant
    if (!entity) {
      entity = await Restaurant.findById(decoded.id).select("-password");
    }

    if (!entity) {
      entity = await Admin.findById(decoded.id).select("-password");
    }

    if (!entity) {
      return res.status(404).json({ message: "Entity not found" });
    }

    req.entity = entity;
    next();
  } catch (error) {
    console.error("Error in protectRoute:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
