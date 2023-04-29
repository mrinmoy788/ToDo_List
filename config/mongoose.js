//require mongoose
const mongoose = require('mongoose');
//connecting to the db
mongoose.connect('mongodb://127.0.0.1:27017/todo_app_db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log('Successfully connected to DB');
});