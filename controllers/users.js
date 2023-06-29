const mongoose = require("mongoose");

const createUser = async (req, res) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(201).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getUser = async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const user = await User.findByIdandUpdate(id, body, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const updateUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findByIdandDelete(id);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
