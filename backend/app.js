const express = require("express");
const app = express();

const middleware = require("./middlewares/main.middleware");
const errorMiddleware = require("./middlewares/error.middleware");

const userRouter = require("./routes/user.route");
const productRouter = require("./routes/product.route");
const reviewRouter = require("./routes/review.route");

//middleware

middleware(app);

//routes

//admin routes
app.use("/admin", userRouter);

//product routes
app.use("/product", productRouter);

//review routes

app.use("/review", reviewRouter);

app.use("/", async (req, res) => {
  res.send("404 page not found");
});

//error middelware

errorMiddleware(app);

//export
module.exports = app;
