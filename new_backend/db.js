const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
// const mongoURI = "mongodb://localhost:27017/vaibhav"

const connectToMongo = ()=> {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connect to Mongo Successfully");
    })
}

module.exports = connectToMongo;