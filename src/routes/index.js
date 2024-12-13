import express from "express";
import booksRouter from "./booksRouter.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), booksRouter);
};

export default routes;
