const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    noteDescription: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    priority:{
        type: String,
        enum:['HIGH','LOW','MEDIUM'],
        default: 'LOW',
        uppercase: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }
});

const notes = mongoose.model('notes',NoteSchema)
module.exports = notes

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated