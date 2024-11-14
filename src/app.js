import express from "express";

const app = express();

app.use(express.json());

function buscaLivro(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}

const livros = [
  {
    id: 1,
    titulo: "Livro 1",
    autor: "Autor 1",
  },
  {
    id: 2,
    titulo: "Livro 2",
    autor: "Autor 2",
  },
  {
    id: 3,
    titulo: "Livro 3",
    autor: "Autor 3",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
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
