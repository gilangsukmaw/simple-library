const express = require("express");
const router = express.Router();
const {
  findAllUser,
  insertUser,
  updateUser,
  destroyUser,
} = require("../controller/userController");

router.get("/", findAllUser);
router.post("/", insertUser);
router.put("/:id", updateUser);
router.delete("/:id", destroyUser);

module.exports = router;
