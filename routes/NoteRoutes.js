const noteModel = require('../models/NotesModel.js');
const app = require('express');
const router = app.Router();

router.get('', (req, res)=>{
    res.send("<h2>Hello There</h2>");
});

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', async (req, res) => {
    
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    const note = new noteModel(req.body);

    try{
        await note.save();
        res.send(note);
    }catch(err) {
        res.status(500).send(err);
    }
    //TODO - Write your code here to save the note
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', async (req, res) => {
    
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    const n = await noteModel.find({});
    try{
        res.send(n);
    }catch(err){
        console.log("Error: " + err);
        res.status(500).send(err);
    }
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', async (req, res) => {

    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    let nId = req.params['noteId'];

    const note = await noteModel.findById(nId);

    try{
        res.send(note);
    }catch(err){
        console.log("Error: " + err);
        res.status(500).send(err);
    }
    //TODO - Write your code here to return onlt one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', async (req, res) => {
    
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    let nId = req.params['noteId'];

    await noteModel.findByIdAndUpdate(nId, req.body);
    const note = await noteModel.findById(nId);
    
    try{
        res.send("Updated Record: <br>" + note);
    }catch(err) {
        res.status(500).send(err);
        console.log("Error" + err);
    }

    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', async (req, res) => {
    

    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    let nId = req.params['noteId'];

    await noteModel.findByIdAndDelete(nId);

    try{
        res.send("Record Deleted");
    }catch(err){
        res.status(500).send(err);
        console.log("Error" + err);
    }
    //TODO - Write your code here to delete the note using noteid
});

module.exports = router
