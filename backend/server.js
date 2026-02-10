require("dotenv").config();

const app = require("./app");
const port = process.env.PORT || 8080;
const url = process.env.URL || "mongodb://localhost:27017/ecommerce";

const connection = require("./connections/database.connection");

//data base connection
connection(url);

// running server
app.listen(port, () => {
  console.log(`app is listening at port ${port}!!`);
});
