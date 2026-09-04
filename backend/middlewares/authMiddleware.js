const express = require("express");

const middleWares = (app)=>{

    console.log("middleware working.")

    app.use(express.json());
    app.use(express.urlencoded({extended:true}))


}

module.exports = middleWares;