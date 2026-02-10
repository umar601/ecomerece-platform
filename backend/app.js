const express = require("express");

const app = express();

const middleware = require("./middlewares/middleware");

//middleware

middleware(app);

//routes
app.use("/", (req, res) => {
  res.send("hello backend");
});

//export
module.exports = app;
