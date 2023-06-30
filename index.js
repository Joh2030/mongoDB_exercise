const express = require("express");
require("dotenv/config");
require("./db");

const userRouter = require("./routes/users");
const eventRouter = require("./routes/event");

const app = express();
const port = 3004;

app.use(express.json());
app.use("/users", userRouter);
app.use("/events", eventRouter);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
