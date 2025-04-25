import express from "express"
import {sendComplaint} from "../controllers/complaint.controller.js"

const router = express.Router()

router.post("/sendComplaint", sendComplaint);


export default router