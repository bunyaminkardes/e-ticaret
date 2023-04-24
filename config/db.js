const mongoose = require("mongoose");

const connectionString = "mongodb://localhost/e-ticaretDB";

mongoose.connect(connectionString, {
    useNewUrlParser: true
});

const db = mongoose.connection;

module.exports = db;