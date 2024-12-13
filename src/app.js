import express from "express";
import dbConnect from "./config/DbConnect.js";
import routes from "./routes/index.js";

const connection = await dbConnect();

connection.on("error", (error) => {
  console.error("Conecction error", error);
});

connection.once("open", () => {
  console.log("Database connected");
});

const app = express();
routes(app);

export default app;
