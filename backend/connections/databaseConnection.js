const mongoose = require("mongoose");


const connection = async(url)=>{

mongoose.connect(url).then(()=>{

    console.log("database connection is successful");

}).catch(()=>{

    console.log("there is some error in connecting with database");


})

}


module.exports = connection;