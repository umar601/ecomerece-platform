const express = require("express");
const app = express();
const port = 8080;
const url = "mongodb://localhost:27017/ecommerce";
const connection = require("./connections/databaseConnection");
const middleWares = require("./middlewares/middleware");


middleWares(app);

connection(url);



app.use("/",(req,res)=>{

    res.send("hello from backend");
})


app.listen(port,()=>{

    console.log(`app is listeing at port ${port}`);

})
