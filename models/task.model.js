import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String,
        required: true
    },
    dueDate: { 
        type: Date, 
        required: true 
    },
    priority: { 
        type: String, 
        enum: ["high", "medium", "low"],
        required: true
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
