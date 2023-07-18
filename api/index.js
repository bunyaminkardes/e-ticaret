const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const fakeData = require("./fakeData");
const cookieParser = require("cookie-parser");

require("dotenv").config();
const app = express();

app.use(cors({credentials : true, origin:true})); //cookie için gerekli opsiyonlar
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(() => {
    fakeData.generateFakeData();
    app.listen(process.env.PORT, () => {
        console.log("veritabanı bağlantısı başarılı.");
        console.log(`uygulama ${process.env.PORT} portunda çalışıyor.`);
    });
}).catch((error) => {
    console.error("veritabanı bağlantısı hatası : ", error);
});