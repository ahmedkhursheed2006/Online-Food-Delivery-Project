import express from "express"
import {protectRoute} from "../middleware/auth.middleware.js"
import {addToCart, placeOrder, viewCart} from "../controllers/order.controller.js"
const router = express.Router()

router.post("/addToCart", protectRoute, addToCart)
router.post("/placeOrder", protectRoute, placeOrder)
router.get("/viewCart", protectRoute, viewCart)