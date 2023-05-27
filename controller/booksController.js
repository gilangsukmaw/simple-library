const { book } = require("../models");

class Books {
  async findAllBooks(req, res, next) {
    try {
      const data = await book.findAll();
      res.status(200).json({ message: "Finded", data: data });
    } catch (error) {
      console.log(error.data);
      res.status(500).json({ message: "Books Not Found", statuscode: 404 });
    }
  }
  async insertBooks(req, res, next) {
    try {
      const data = await book.create({
        title: req.body.title,
        author: req.body.author,
      });
      res.status(201).json({ message: "Created" });
    } catch (error) {
      res.status(500).json({ message: "Error Added" });
    }
  }
  async updateBooks(req, res, next) {
    try {
      const data = await book.update(
        {
          title: req.body.title,
          author: req.body.author,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({ message: "Updated" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error Updated" });
    }
  }
  async destroyBooks(req, res, next) {
    try {
      const data = await book.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ message: "Deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error Deleted" });
    }
  }
}

module.exports = new Books();
