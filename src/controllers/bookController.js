import book from "../models/Book.js";

class BookController {
  static async ListBooks(req, res) {
    try {
      const booksList = await book.find({});

      res.status(200).json(booksList);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao listar livros` });
    }
  }

  static async createBook(req, res) {
    try {
      const newBook = await book.create(req.body);

      res.status(201).json({ message: "criado com sucesso", livro: newBook });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro` });
    }
  }

  static async listBookById(req, res) {
    try {
      const id = req.params.id;
      const findedBook = await book.findById(id);
      res.status(200).json(findedBook);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do livro` });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao atualizar livro` });
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);

      res.status(200).json({ message: "livro deletado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao deletar livro` });
    }
  }
}

export default BookController;
