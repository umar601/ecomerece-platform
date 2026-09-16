require("dotenv").config();

const app = require("./app");
const port = process.env.PORT || 8080;
const url = process.env.URL || "mongodb://localhost:27017/ecommerceapp";
const {redisConnection} = require("./config/redis.connection");

const connection = require("./config/database.connection");

//data base connection
connection(url);
redisConnection();

// running server
app.listen(port, () => {
  console.log(`app is listening at port ${port}!!`);
});
