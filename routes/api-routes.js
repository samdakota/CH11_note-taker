const express = require('express');
const router = require("express").Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const NoteService = require('../lib/notes');

const noteService = new NoteService();

router.get('/notes', (req, res) => {
  noteService.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
  noteService.addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

// router.delete('/notes/:id', (req, res) => {
//   noteService.removeNote()
//   .then

// })

module.exports = router;