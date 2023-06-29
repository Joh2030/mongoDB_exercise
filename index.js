const express = require("express");
require("dotenv/config");
// const mongoose = require("mongoose");
// const User = require("./models/user");

require("./db");

const userRouter = require("./routes/users");

const app = express();
const port = 3004;

app.use(express.json());
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
