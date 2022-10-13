

const router = require("express").Router();
// const {
//     notes
// } = require('../../db/db');
const {
    createNewNote,
    deleteNote
} = require('../note');


router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    let notes = createNewNote(req.body, notes);
    req.body.id = notes.length.toString();
    res.json(notes);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})


module.exports = router;