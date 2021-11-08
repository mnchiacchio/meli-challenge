var router = require('express').Router()
var item = require('./item')
var items = require('./items')

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.use('/item', item)
router.use('/items', items)

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router