import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js"
import {addToCart, updateCart, viewCart, removeFromCart} from "../controllers/cart.controller.js"
const router = express.Router()

router.post("/add/:id", protectRoute, addToCart)
router.put("/update/:id", protectRoute, updateCart)
router.get("/get", protectRoute, viewCart)
router.delete("/remove/:id", protectRoute, removeFromCart)

export default router