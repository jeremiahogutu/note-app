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
   return fetchNotes();
};

const getNote = (title) => {
    let notes = fetchNotes();
    const targetNote = notes.filter(note => note.title === title)
    return targetNote[0];
};

const removeNote = (title) => {
    let notes = fetchNotes();
    const newNotes = notes.filter(note => note.title !== title );
    saveNotes(newNotes);
    return notes.length !== newNotes.length;
};

const logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};