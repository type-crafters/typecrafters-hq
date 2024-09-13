import express, { Express } from "express";

const app: Express = express();

const PORT = 5000;
app.listen(PORT, () => {
    console.log("App listening on http://127.0.0.1:" + PORT);
});