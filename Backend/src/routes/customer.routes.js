import express from 'express';
import {protectRoute} from "../middleware/auth.middleware.js"
import {signup, login, logout, checkAuth, googleAuth} from "../controllers/customer.controller.js"
const router = express.Router();

//                                  AUTH ROUTES

router.post("/signup", signup)
router.post("/login", login)
router.post("/googleAuth", googleAuth)
router.post("/logout", logout)
router.get("/auth", protectRoute, checkAuth);

//                     PROFILE VIEW AND UPDATE ROUTES (pending confirmation)

// router.get("/profile", protectRoute , profile)  //View Profile
// router.put("/profile", protectRoute , profile)  // Update Profile

//                          ORDER VIEW AND UPDATE ROUTES

// router.get("/order", protectRoute ,order) //View Orders
// router.post("/order", protectRoute ,order) //Place Orders


export default router;