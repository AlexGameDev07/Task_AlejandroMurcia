import app from "./app.js";
import { config } from "./src/config.js";
import "./database.js"

async function main(){
    const PORT = config.db.PORT;
    app.listen(PORT)
    console.log("Servidor encendido, todo nice.")
}

main()