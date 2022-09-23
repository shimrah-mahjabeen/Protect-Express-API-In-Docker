const express = require("express");
const app = express();
app.use(express.json());

const timeRouter = require("./modules/time/routes");
const authRouter = require("./modules/authentication/routes");

app
  .use("/auth", authRouter)
  .use("/time", timeRouter)
  .use("/", (req, res) =>
    res.send("Welcome to Protected Api in a Docker Container")
  );

// Handle errors.
app.use(function (err, req, res, next) {
  console.log("app error", err);
  res.status(err.status || 500).send(err.message);
});

module.exports = app;
