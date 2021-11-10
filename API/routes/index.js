const { Router } = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function ( { ItemRoutes }) {
    const router = Router();
    const apiRouter = Router();
    
    apiRouter.use(cors()).use(bodyParser.json()).use(compression());

    router.use('/api', apiRouter)
    apiRouter.use('/', ItemRoutes)

    return router;
}