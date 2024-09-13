import { Pool } from "pg";
import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({
    path: resolve(__dirname, "../.env")
});

const conn: Pool = new Pool({
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string)
});

export default conn;