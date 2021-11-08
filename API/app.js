var express = require('express');
var app = express();
var bodyParser = require('body-parser')   

var item_controller = require("./controllers/item.controller");

var port = 3000;
app.listen(port, () => {
    console.log("El servidor está inicializado en el puerto " + port);
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())   

var router = require('./routes/routes')
app.use('/api', router)