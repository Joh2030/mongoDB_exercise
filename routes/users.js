const express = require("express");

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");
const { get } = require("mongoose");
const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.put("/", updateUser);
userRouter.delete("/", deleteUser);

module.export = userRouter;
