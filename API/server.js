const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

class Server{
    constructor({ config, router }) {
        this._config = config;
        this._express = express();
        this._express.use(cors());
        this._express.use(router);
        this._express.use(bodyParser.json());
    }

    start(){
        return new Promise((resolve, reject) =>{
            const http = this._express.listen(this._config.PORT, () => {
                const { port } = http.address();
                console.log("Aplicación corriendo en puerto " + port);
                resolve();
            })
        })
    }
}

module.exports = Server;