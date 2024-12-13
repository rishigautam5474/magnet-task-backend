import express from "express";
import { getTaskByUser, loginUser, registerUser } from "../controllers/user.controllers.js";
import authentication from "../middlewares/auth.middleware.js";
const router = express.Router();

// Router
router.post("/register", registerUser)
router.post('/login', loginUser)

// Middleware
router.use(authentication)

// Router
router.get("/task-lists", getTaskByUser)


export default router