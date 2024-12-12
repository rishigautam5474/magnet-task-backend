import Task from "../models/task.model.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Title, Due Date, and Priority are required.",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      status: "success",
      message: "Successfully user registered",
      user,
    });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: "error",
        message: "Please enter correct email and password",
      });
    }

    const isMatched = await user.comparePassword(password);

    if (!isMatched) {
      return res.status(401).json({
        status: "error",
        message: "Please enter correct email and password",
      });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      status: "success",
      message: `${user.name} is login successfully`,
      token,
      user: { id: user._id, name: user.name },
    });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

const getTaskByUser = async (req, res) => {
  try {
    const userid = req?.user; 
    // console.log("User ID:", userid);
    
    const tasks = await Task.find({ userid });

    if (!tasks) {
      return res
        .status(404)
        .json({ status: "error", message: "No tasks found for this user" });
    }

    return res
      .status(200)
      .json({ status: "success", message: "Tasks found successfully", tasks });
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
};


export { registerUser, loginUser, getTaskByUser };
