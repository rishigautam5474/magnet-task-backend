import express from "express";
import {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} from "../controllers/task.controllers.js";
import authentication from "../middlewares/auth.middleware.js";
const router = express.Router();

router.use(authentication);

router.get("/", getTasks);
router.post("/create", createTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

export default router;
