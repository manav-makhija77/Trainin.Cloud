//is file me database se connect karne ka code hai 

const mongoose = require('mongoose');
const MongoURL = "mongodb://127.0.0.1:27017/traininfos";

const c = ()=>{
    mongoose.connect(MongoURL)
    console.log("Connected Sucess");
}

module.exports = c;
 