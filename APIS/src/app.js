// -- SERVER KO CREATE KARNA --

const express = require("express");

const app = express()
app.use(express.json())


const notes = []

// -- WE HAVE TO TAKE A INPUT FROM USER OF 'TITLE', 'DISCRIPTION' -- //


// -- POST /notes -- //
app.post('/notes', (req, res) => {

    notes.push(req.body)
    res.status(201).json({
        message: "Notes Created Successfully"
    })
})

// -- GET /notes -- //
app.get('/notes', (req, res) => {

    res.status(200).json({
        message: "Notes Fetched Successfully",
        notes : notes
    })
})

// -- DELETE /notes/: index -- //
app.delete('/notes/:index', (req, res) => {

    const index = req.params.index
    delete notes [ index ]
    res.status(200).json({
        message: "Notes Deleted Successfully"
    })
})

// -- PATCH /notes/: index -- //
app.patch('/notes/:index', (req, res) => {

    const index = req.params.index 
    const discription = req.body.discription
    notes[ index ].discription = discription
    res.status(200).json({
        message: "Notes Patched Successfully"
    })
})







module.exports = app;