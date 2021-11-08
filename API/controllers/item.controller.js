const router = require("express").Router();
const item = require("../models/item");
const https = require('https');

// Display list of all items.
exports.items_search = function(req, res) {
    var query = req.query.q || "";
    var urlMELI = 'https://api.mercadolibre.com/sites/MLA/search?q=' + query;

    res.json({ mensaje: '¡Bienvenido a mi API!' })  
    return;
    //res.send({url: urlMELI});
    /*router.get(urlMELI, function(req, res) {
        
        res.json({ mensaje: '¡Bienvenido a nuestra API!' })  
    })*/

    var resRef = res;
    var responseObj;
    const reqMELI = https.get(urlMELI, (resp) => {
        //console.log('statusCode:', res.statusCode);
        //console.log('headers:', res.headers);
        
        resp.on('data', d => {
            responseObj = d;
            process.stdout.write(d)
            return resRef.json(responseObj);
            //resRef.send(responseObj);
            /*try {
                return resRef.sendStatus(200).json(responseObj);
                
            } catch (error) {
                console.log(error)
            }*/
        })
    })
    

    reqMELI.on('error', error => {
        console.error(error)
        
        return resRef.sendStatus(500);;
    })
    
    reqMELI.end();
};

exports.item = function(req, res) {

    var id = req.params.id;

    res.send("TODO");

};
