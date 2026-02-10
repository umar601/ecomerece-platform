const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phoneNumber: {
    type: String,
    default: null
  },

  addresses: {
    // can keep same as postal in code 
    permanentAddress: {
      type: String,
      default: null
    },

    postalAddress: {
      type: String,
      required:true
    },

    city: {
      type: String,
      default: null
    },

    country: {
      type: String,
      default: null
    }
  },
  // weather the role is admin or the user 
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;