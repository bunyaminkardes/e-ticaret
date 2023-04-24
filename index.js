//bcrypt
//jwt


const PORT = 3000;

const express = require("express");

const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const session = require("express-session");
const db = require("./config/db.js");


const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ //bunu app.use('/', routes); altında tanımlarsan hata veriyor.
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false
}));

app.use('/', routes);

db.once("open", function() {
    console.log("veritabanı bağlantısı kuruldu.");
    app.listen(PORT);
});