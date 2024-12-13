import express from "express";
import dbConnect from "./config/DbConnect.js";
import book from "./models/Book.js";
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

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
  const booksList = await book.find();
  res.status(200).json(booksList);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).send("Livro atualizado com sucesso!");
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso.");
});

export default app;
