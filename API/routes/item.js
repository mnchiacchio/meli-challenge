var router = require('express').Router()
var item_controller = require("../controllers/item.controller");

router.get('/:id', item_controller.item);

module.exports = router