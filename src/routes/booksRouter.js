import express from "express";
import BookController from "../controllers/BookController.js";

const booksRouter = express.Router();

booksRouter.get("/livros", BookController.ListBooks);

export default booksRouter;
