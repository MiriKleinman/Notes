let notes = []; // Array to store notes

const notesController = {
    getAllNotes: (req, res) => {
        res.json(notes);
    },
    getNoteById: (req, res) => {
        const id = req.params.id;
        const note = notes.find(note => note.id === id);
        res.json(note);
    },
    createNote: (req, res) => {
        const newNote = req.body;
        notes.push(newNote);
        res.json(newNote);
    },
    updateNote: (req, res) => {
        const id = req.params.id;
        const updatedNote = req.body;
        notes = notes.map(note => (note.id === id ? { ...note, ...updatedNote } : note));
        res.json({ message: 'Note updated successfully' });
    },
    deleteNote: (req, res) => {
        const id = req.params.id;
        notes = notes.filter(note => note.id !== id);
        res.json({ message: 'Note deleted successfully' });
    }
};

module.exports = notesController;
