require("dotenv").config();
const express = require("express");
const app = express();

const routes = require("./routes/routes");

app.use('/api', routes);

app.listen(process.env.PORT, () => {
    console.log("uygulama şu portta çalışıyor : ", process.env.PORT);
});