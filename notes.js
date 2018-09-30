console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return []
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title,
        body
    };

    const duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note
    }
};

const getAll = () => {
    console.log('Getting all notes')
};

const getNote = (title) => {
    console.log('Getting note', title)
};

const removeNote = (title) => {
    let notes = fetchNotes();
    const newNotes = notes.filter(note => note.title !== title );
    saveNotes(newNotes);
    return notes.length !== newNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};