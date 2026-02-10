const mongoose = require("mongoose");

const connection = async (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("database connection is successful!!");
    })
    .catch((err) => {
      console.log("there is some error in connecting with database!!", err);
    });
};

module.exports = connection;
