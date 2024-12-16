import author from "../models/Author.js";

class authorController {
  static async ListAuthors(req, res) {
    try {
      const booksList = await author.find({});

      res.status(200).json(booksList);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao listar livros` });
    }
  }

  static async createAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);

      res
        .status(201)
        .json({ message: "criado com sucesso", author: newAuthor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar autor` });
    }
  }

  static async listAuthorById(req, res) {
    try {
      const id = req.params.id;
      const findedAuthor = await author.findById(id);

      res.status(200).json(findedAuthor);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do autor` });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);

      res.status(200).json({ message: "autor atualizado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao atualizar autor` });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);

      res.status(200).json({ message: "autor deletado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao deletar autor` });
    }
  }
}

export default authorController;
