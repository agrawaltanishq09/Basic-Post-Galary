const mongoose = require("mongoose");
const { title } = require("node:process");

const noteSchema = new mongoose.Schema({
    title: String,
    discription: String,
})

const noteModel = mongoose.model("note", noteSchema)

module.exports = noteModel