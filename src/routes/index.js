import express from "express";
import booksRouter from "./booksRouter.js";
import authorRouter from "./authorsRouter.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), booksRouter);
  app.use(express.json(), authorRouter);
};

export default routes;
