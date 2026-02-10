const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    //actual review
    review: {
      type: String,
      required: true,
      trim:true
    },
    // user who added review
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    //product where review added
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prodcut",
      required: true,
    },
    // stars or rating
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
  },
  //by default check when added and updated
  {
    timestamps: true,
  },
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
