const reviewRouter = require("express").Router();
const { addReview, getReview } = require("../controllers/review.controller");

//get
//post
reviewRouter
 .post("/:productId", addReview)
 .get("/:productId", getReview)

 module.exports = reviewRouter;
