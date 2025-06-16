import taskCtrl from "../controllers/taskCtrl.js";
import express from "express";

const taskRouter = express.Router();

taskRouter.route("/")
    .get(taskCtrl.getTask)
    .post(taskCtrl.postTask)

taskRouter.route("/:id")
    .put(taskCtrl.putTask)
    .delete(taskCtrl.deleteTask)

export default taskRouter;
    