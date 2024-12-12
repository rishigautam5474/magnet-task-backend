import env from "dotenv";
env.config();
import express from "express";
import cors from "cors";
import taskRouter from "./routes/task.routes.js";
import mongoDbConnected from "./server.js";
import bodyParser from 'body-parser';
import userRouter from "./routes/user.routes.js";
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// MongoDb Connected
mongoDbConnected(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

// PORT
const PORT = process.env.EXPRESS_PORT || 5000;

app.get("/api", (req, res) => {
  return res.send("Welcome Task");
});


// Routers
app.use("/api/tasks", taskRouter);
app.use("/api/users", userRouter)

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT} PORT`);
});
