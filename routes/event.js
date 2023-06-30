const express = require("express");

const {
  createEvent,
  getEvents,
  //   getUser,
  //   updateUser,
  //   deleteUser,
} = require("../controllers/event");
const mongoose = require("mongoose");
const eventRouter = express.Router();

eventRouter.post("/", createEvent);
eventRouter.get("/", getEvents);
// eventRouter.get("/:id", getUser);
// eventRouter.put("/", updateUser);
// eventRouter.delete("/", deleteUser);

module.exports = eventRouter;
