const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  payment: {
    type: Number,
    default: 0,
    required: true
  },

  status: {
    type: String,
    enum: ["confirmed", "rejected", "pending"],
    default: "pending"
  }
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;