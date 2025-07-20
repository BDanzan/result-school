const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk');

const notesPath = path.join(__dirname, './db.json');

async function addNote(title) {
    const notes = await getNotes();

    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(note);

    await fs.writeFile(notesPath, JSON.stringify(notes))
    console.log(chalk.default.bgGreen('Note added successfully!'));
}

async function getNotes() {
    const notes = await fs.readFile(notesPath, {encoding: 'utf-8'});
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function deleteNote(id) {
    const notes = await getNotes()
    const noteFiltered = notes.filter(note => note.id !== String(id));
    await fs.writeFile(notesPath, JSON.stringify(noteFiltered))
}

async function printNotes() {
    const notes = await getNotes();
    console.log(chalk.default.bgBlue('Here is the ist of notes'))
    notes.forEach(note => {
        console.log(chalk.default.blue(note.id, note.title));
    })
}

module.exports = {
    addNote, printNotes, deleteNote
}