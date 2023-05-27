const express = require("express");
const router = express.Router();
const {
  findAllBooks,
  insertBooks,
  updateBooks,
  destroyBooks,
} = require("../controller/booksController");

//  routes
router.get("/", findAllBooks);
router.post("/", insertBooks);
router.put("/:id", updateBooks);
router.delete("/:id", destroyBooks);

module.exports = router;
