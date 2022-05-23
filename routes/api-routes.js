const router = require("express").Router();
const NoteService = require('../lib/notes');

const noteService = new NoteService();

router.get('/notes', (req, res) => {
  noteService.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
  noteService.addNote()
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

router.delete('/notes/:id', (req, res) => {
  noteService.removeNote()

})

module.exports = router;