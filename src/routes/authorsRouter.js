import express from "express";
import authorController from "../controllers/authorController.js";

const authorsRouter = express.Router();

authorsRouter.get("/autores", authorController.ListAuthors);
authorsRouter.post("/autores", authorController.createAuthor);
authorsRouter.get("/autores/:id", authorController.listAuthorById);
authorsRouter.put("/autores/:id", authorController.updateAuthor);
authorsRouter.delete("/autores/:id", authorController.deleteAuthor);

export default authorsRouter;
