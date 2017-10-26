// this should be exactly the same note that we have used in the past.
const uuid = require('uuid');

function Note(content){
    this.id = uuid();
    this.date = new Date();
    this.content = content;
};

let newNote = new Note('hello');

module.exports = Note;
