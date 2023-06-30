const mongoose = require("mongoose");

const createEvent = async (req, res) => {
  try {
    const { body } = req;
    const event = await Event.create(body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getEvents = async (req, res) => {
  try {
    const event = await Event.find({});
    res.status(201).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// const getUser = async (req, res) => {
//   try {
//     const {
//       body,
//       params: { id },
//     } = req;
//     const event = await User.findByIdandUpdate(id, body, { new: true });
//     res.json(event);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };
// const updateUser = async (req, res) => {
//   try {
//     const {
//       params: { id },
//     } = req;
//     const event = await User.findById(id);
//     res.json(event);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// const deleteUser = async (req, res) => {
//   try {
//     const {
//       params: { id },
//     } = req;
//     const event = await User.findByIdandDelete(id);
//     res.json(event);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

module.exports = {
  createEvent,
  getEvents,
};
