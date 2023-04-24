const PORT = 3000;


const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.send("ilk");
})

app.listen(PORT);
