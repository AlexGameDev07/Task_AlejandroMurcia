import mongoose from "mongoose";

import { config } from "./src/config.js";

mongoose.connect(config.db.URI);

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Base de datos conectada correctamente, osea que furula.")
})

connection.on("disconnected", () => { console.log("La base está desconectada")})
connection.on("error", (err) => {console.log("Error de mongo: ", err)})