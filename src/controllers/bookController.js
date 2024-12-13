import book from "../models/Book.js";

class BookController {
  static async ListBooks(req, res) {
    const booksList = await book.find({});

    res.status(200).json(booksList);
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
}

export default BookController;
