import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getOrders,
  placeOrder,
  updateOrder,
  cancelOrder,
} from "../controllers/order.controller.js";
const router = express.Router();

router.post("/placeOrder", protectRoute, placeOrder);
router.get("/getOrders", protectRoute, getOrders);
router.put("/update/:id", protectRoute, updateOrder);
router.delete("/cancel/:id", protectRoute, cancelOrder);
export default router;
