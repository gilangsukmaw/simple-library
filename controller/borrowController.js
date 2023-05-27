const { borrow, book, user } = require("../models");

class Borrow {
  async findAllBorrow(req, res, next) {
    try {
      //query biaso
      const data = await borrow.findAll();

      const result = [];

      //promise (menjanjikan sesuatu) jadi disini nunggu ini kelar dulu
      await Promise.all(
        //array function fungsinyo iterasi seluruh object di dalem array
        data.map(async (x) => {
          //query biaso
          const userData = await user.findOne({ where: { id: x.user_id } });
          const bookData = await book.findOne({ where: { id: x.book_id } });

          //ini fungsinyo masukin suatu data ke dalam array
          result.push({
            id: x.id,
            user_id: userData.id,
            username: userData.name,
            book_id: bookData.id,
            book_title: bookData.title,
            book_author: bookData.author,
          });
        })
      );

      res.status(200).json({ message: "Finded", data: result });
    } catch (error) {
      console.log(error.data);
      res
        .status(500)
        .json({ message: "Borrow Date Not Found", statusCode: 404 });
    }
  }
  async insertBorrow(req, res, next) {
    try {
      const dataUser = await user.findAll({
        limit: 1,
        where: {
          id: req.body.user_id,
        },
      });

      if (!user) {
        res.status(404).json({ message: "User Not Found" });
      }
      const dataBook = await book.findAll({
        limit: 1,
        where: {
          id: req.body.book_id,
        },
      });
      if (!dataBook) {
        res.status(404).json({ message: "Books Not Found" });
      }

      const insert = await borrow.create({
        user_id: dataUser[0].id,
        book_id: dataBook[0].id,
        return_at: new Date(),
      });
      res.status(200).json({ message: "Books Succes Borrowed!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error!" });
    }
  }
}

module.exports = new Borrow();
