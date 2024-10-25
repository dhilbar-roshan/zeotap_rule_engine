

const mongoose = require('mongoose');

const uri = 'mongodb+srv://dhilbar:<dhilbarpassword>@cluster0.4kigm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri);

module.exports = mongoose.connection;
