import book from "../models/Book.js";

class BookController {
  static async ListBooks(req, res) {
    const booksList = await book.find({});
    res.status(200).json(booksList);
  }
}

export default BookController;
