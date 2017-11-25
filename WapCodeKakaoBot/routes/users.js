var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:name', function(req, res, next) {
    console.log(req.params.name);
    res.send('respond with a resource');
});

module.exports = router;