import express from "express";
import taskRouter from "./src/routes/taskRoutes.js";

//parte de la documentación
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';

const swaggerDocument = JSON.parse(
    fs.readFileSync(path.resolve("./docs.json"), 'utf8')

)

const app = express();
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use("/api/tasks", taskRouter)
export default app;
