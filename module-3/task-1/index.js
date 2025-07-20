const yargs = require('yargs');
const {hideBin} = require("yargs/helpers");
const pkg = require('./package.json');
const {describe} = require("yargs");
const {addNote, printNotes, deleteNote} = require("./notes.controller");

yargs(hideBin(process.argv))
    .version(pkg.version)
    .command(
        'add',
        'Add new note to list',
        () => {
            return {
                title: {
                    type: 'string',
                    describe: 'Note title',
                    demandOption: true
                }
            }
        },
        ({title}) => {
            addNote(title);
        }
    )
    .command(
        'list',
        'Print all notes',
        () => {},
        async () => {
            const notes = await printNotes();
            console.log(notes);
        }
    )
    .command(
        'remove',
        'Remove note',
        () => {},
        async ({id}) => {
            const notes = await deleteNote(id);
            console.log(notes);
        }
    )
    .parse();
