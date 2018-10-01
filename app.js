const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = process.argv[2];

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note)
    } else {
        console.log('Note title already in use');
    }
} else if (command === 'list') {
   const allNotes = notes.getAll();
   console.log(`Printing ${allNotes.length} notes(s).`);
   allNotes.forEach(note => notes.logNote(note))
} else if (command === 'read') {
    const targetNote = notes.getNote(argv.title);
    if (targetNote) {
        console.log('Found Note');
        notes.logNote(targetNote)
    } else {
        console.log('Note was not found');
    }
} else if (command === 'remove') {
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognised');
}