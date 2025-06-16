import express from "express";
import taskRouter from "./src/routes/taskRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/tasks", taskRouter)
export default app;
