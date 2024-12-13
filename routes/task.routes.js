import express from "express";
import {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} from "../controllers/task.controllers.js";
import authentication from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/", getTasks);

// Miidleware
router.use(authentication);

//Router
router.post("/create", createTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

export default router;
