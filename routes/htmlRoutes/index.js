const path = require('path');
const router = require('express').Router();

// GET /notes should return the notes.html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../develop/public/notes.html'));
});

// GET * should return the index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../develop/public/index.html'));
});