const { user } = require("../models");

class User {
  async findAllUser(req, res, next) {
    try {
      const data = await user.findAll();
      res.status(200).json({ message: "Finded User", data: data });
    } catch (error) {
      console.log(error.data);
      res.status(500).json({ message: "User Not Found", statusCode: 404 });
    }
  }
  async insertUser(req, res, next) {
    try {
      const data = await user.create({
        name: req.body.name,
        email: req.body.email,
      });
      res.status(201).json({ message: "User Created" });
    } catch (error) {
      res.status(500).json({ message: "Error Create User" });
    }
  }
  async updateUser(req, res, next) {
    try {
      const data = user.update(
        {
          name: req.body.name,
          email: req.body.email,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({ message: "User Updated" });
    } catch (error) {
      res.status(500).json({ message: "Error Updated User" });
    }
  }
  async destroyUser(req, res, next) {
    try {
      const data = user.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ message: "User Deleted!" });
    } catch (error) {
      res.status(500).json({ message: "Error User Deleted" });
    }
  }
}

module.exports = new User();
