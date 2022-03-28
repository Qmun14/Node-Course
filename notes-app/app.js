// const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
// console.log(process.argv);

// Customize yargs version
yargs.version('1.1.0');

// Create add Command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note Content',
            demandOption : true,
            type : 'string'
        } 
    },
    handler : function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove Command
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    handler : function () {
        console.log('removing The Notes');
    }
})

// Create list Command
yargs.command({
    command : 'list',
    describe : 'List your Notes',
    handler : function(){
        console.log("listing The Notes");
    }
})

// Create read Command
yargs.command({
    command : 'read',
    describe : 'Read a Notes',
    handler : function(){
        console.log("Reading The Notes");
    }
})

yargs.parse();

// add, remove, read. list
// console.log(yargs.argv);













// import fs from 'fs';

// fs.writeFileSync("./notes.txt", "Hello My Name is Ma'mun");

// fs.appendFileSync("./notes.txt", "\r\nHope u enjoy my style cmiiw..");