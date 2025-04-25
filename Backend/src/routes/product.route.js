import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
} from "../controllers/product.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/addProduct", protectRoute, addProduct);
router.get("/menu", protectRoute, getProduct);
router.delete("/delete/:id", protectRoute, deleteProduct);
export default router;
