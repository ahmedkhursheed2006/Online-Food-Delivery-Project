import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  login,
  signup,
  logout,
  getAllCustomers,
  getAllRestaurants,
  getAllAdmins,
  updateStatus,
  getAllComplaints
} from "../controllers/admin.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/allCustomers", protectRoute, getAllCustomers);
router.get("/allRestaurants", protectRoute, getAllRestaurants);
router.get("/allAdmins", protectRoute, getAllAdmins);
router.get("/allComplaints", protectRoute, getAllComplaints);




router.put("/updateStatus/:UserId", protectRoute, updateStatus);

export default router;
