const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/NoteRoutes.js');
mongoose.set('returnOriginal', false);


const DB_URL = "mongodb+srv://gbc:s3cr3t@cluster0.dhvqi.mongodb.net/gbc-fall2021?retryWrites=true&w=majority"
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/", router);

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});