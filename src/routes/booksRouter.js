import express from "express";
import BookController from "../controllers/BookController.js";

const booksRouter = express.Router();

booksRouter.get("/livros", BookController.ListBooks);
booksRouter.post("/livros", BookController.createBook);
booksRouter.get("/livros/:id", BookController.listBookById);
booksRouter.put("/livros/:id", BookController.updateBook);
booksRouter.delete("/livros/:id", BookController.deleteBook);

export default booksRouter;
