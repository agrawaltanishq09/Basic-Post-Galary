const express = require('express');
const noteModel = require("./models/note.model")



const app = express();
app.use(express.json());


app.post("/notes", async (req, res) => {

    const data = req.body
    await noteModel.create({
        title: data.title,
        discription: data.discription
    })

    res.status(201).json({
        message: "Note is created"
    })

})

app.get("/notes", async (req, res) => {

    const notes = await noteModel.find()     // find() always give []
    res.status(200).json({
        message: "Note fetched sucessfully", 
        notes: notes
    })
})

app.delete("/notes/:id", async (req, res) => {

    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: "Note deleted sucessfully", 
    })
})

app.patch("/notes/:id", async (req, res) => {

    const id = req.params.id

    await noteModel.findOneAndDelete({_id: id},{discription: discription})

    res.status(200).json({
        message: "Note updated sucessfully", 
    })


});

module.exports = app