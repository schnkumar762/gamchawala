const express = require("express");
const bodyparser = require("body-parser");
const { PORT } = require("./config");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.text());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/ping", (req, res, next) => {
  res.json({
    message: "Server is started and u r at port /",
  });
});

app.listen(PORT, () => {
  console.log("Server started at ", PORT);
});
