import express from "express";
import { getTaskByUser, loginUser, registerUser } from "../controllers/user.controllers.js";
import authentication from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/register", registerUser)
router.post('/login', loginUser)

router.use(authentication)

router.get("/task-lists", getTaskByUser)


export default router