import express from 'express';
import {protectRoute} from "../middleware/auth.middleware.js"
import {signup, login, logout, checkAuth, googleAuth, getProductsByCity, updateProfile} from "../controllers/customer.controller.js"
const router = express.Router();

//                                  AUTH ROUTES

router.post("/signup", signup)
router.post("/login", login)
router.post("/googleAuth", googleAuth)
router.post("/logout", logout)
router.get("/auth", protectRoute, checkAuth);
router.get("/getProducts", protectRoute, getProductsByCity)
router.put("/updateProfile", protectRoute, updateProfile)



export default router;