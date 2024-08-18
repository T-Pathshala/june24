const express = require("express");
const User = require("./../models/userModel");
const router = express.Router();
const {
  getAllUser,
  addUser,
  updateUser,
  deleteUser,
} = require("./../controllers/userController");

router.get("/user", getAllUser);

router.post("/user", addUser);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

module.exports = router;
