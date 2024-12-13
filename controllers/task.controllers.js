import Task from "../models/task.model.js";
import User from "../models/user.model.js";

const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority, status } = req.body;
    const userId = req?.user;

    if (!title || !dueDate || !priority || !status) {
      return res.status(400).json({
        status: "error",
        message: "All fields are required",
      });
    }

    // Create and save the task
    const task = await Task.create({
      title,
      description,
      dueDate,
      priority,
      status,
      userid: userId,
    });
    const update = {
      $push: { yourtaskids: task._id },
    };

    const taskInfo = await User.findByIdAndUpdate(userId, update);

    return res
      .status(201)
      .json({ status: "success", message: "Task added successfully", task });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({
      status: "error",
      message: "Error occurred while creating task. Please try again later",
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    if (!tasks || tasks.length === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "No tasks found" });
    }
    return res.status(200).json({ status: "success", data: tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return res.status(500).json({
      status: "error",
      message: "Failed to fetch tasks. Please try again later",
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { title, description, dueDate, status } = req?.body;
    const { id } = req?.params;
    if (!title || !description || !dueDate || !status) {
      return res
        .status(400)
        .json({ status: "error", message: "All fields are required" });
    }

    const task = await Task.findByIdAndUpdate(
      id,
      {
        title,
        description,
        dueDate,
        status,
      },
      { new: true }
    );
    if (!task) {
      return res
        .status(404)
        .json({ status: "error", message: "Task not found" });
    }

    return res
      .status(200)
      .json({ status: "success", message: "Task updated successfully", task });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req?.params;
    const userId = req?.user;

    const update = {
      $pull: { yourtaskids: id },
    };
    const user = await User.findByIdAndUpdate(userId, update);

    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res
        .status(404)
        .json({ status: "error", message: "Task not found" });
    }

    return res
      .status(200)
      .json({ status: "success", message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

const getSpecificTasks = async (req, res) => {
  try {
    const { id } = req?.params;

    const task = await Task.findById(id);

    if (!task) {
      return res
        .status(404)
        .json({ status: "error", message: "No tasks found" });
    }

    return res
      .status(200)
      .json({ status: "success", message: "Tasks found successfully", task });
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
};

export { createTask, getTasks, updateTask, deleteTask, getSpecificTasks };
