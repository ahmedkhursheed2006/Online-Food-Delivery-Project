import express from "express";
import {protectRoute} from "../middleware/auth.middleware.js"
import { login, signup, logout, getAllCustomers, getAllRestaurants, getAllAdmins } from "../controllers/admin.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout)


router.get("/allCustomers", protectRoute ,  getAllCustomers)
router.get("/allRestaurants", protectRoute,  getAllRestaurants)
router.get("/allAdmins", protectRoute,  getAllAdmins)

export default router;
