const express = require("express");
const {
  findAllBorrow,
  insertBorrow,
} = require("../controller/borrowController");
const router = express.Router();

router.get("/", findAllBorrow);
router.post("/", insertBorrow);

module.exports = router;
