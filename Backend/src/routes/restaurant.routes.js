import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  signup,
  login,
  checkAuth,
  logout,
} from "../controllers/restaurant.controller.js";
const router = express.Router();

//                                  Auth Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/auth", protectRoute, checkAuth);

export default router;
