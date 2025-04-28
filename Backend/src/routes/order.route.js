import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  addToCart,
  updateCart,
  viewCart,
} from "../controllers/order.controller.js";
const router = express.Router();

router.post("/addToCart/:id", protectRoute, addToCart);
// router.post("/placeOrder", protectRoute, placeOrder)
router.get("/viewCart", protectRoute, viewCart);
router.put("/updateCart", updateCart);

export default router;
