import dotenv from "dotenv"

dotenv.config();

export const config = {
    db:{
        URI: process.env.DB_URI,
        PORT: process.env.PORT
    }
}