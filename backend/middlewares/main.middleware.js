const express = require("express");
const cookieParser = require("cookie-parser");

const middleWares = (app)=>{

    // console.log("middleware working.")

    app.use(express.json());
    app.use(cookieParser())
    app.use(express.urlencoded({extended:true}))


}

module.exports = middleWares;