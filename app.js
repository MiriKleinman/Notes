// app.js

const express = require('express');
const app = express();

// Middleware to handle JSON data
app.use(express.json());

// Import notes controller
const notesController = require('./notesController');

// Define routes for notes CRUD operations
app.get('/notes', notesController.getAllNotes);
app.get('/notes/:id', notesController.getNoteById);
app.post('/notes', notesController.createNote);
app.put('/notes/:id', notesController.updateNote);
app.delete('/notes/:id', notesController.deleteNote);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});