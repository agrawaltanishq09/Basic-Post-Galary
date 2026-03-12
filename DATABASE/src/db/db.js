const mongoose = require("mongoose");

async function connectDB() {

    await mongoose.connect("mongodb+srv://TANISHQ:01234567890@completbackend.qmrudf1.mongodb.net/halley")  // Database name is halley
    console.log("Connected to DB")

}

module.exports = connectDB 