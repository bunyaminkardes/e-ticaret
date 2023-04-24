const PORT = 3000;

const express = require("express");
const routes = require("./routes/routes.js");



const app = express();

app.use('/', routes);

app.set('view engine', 'ejs');

app.listen(PORT);
