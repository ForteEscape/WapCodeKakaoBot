var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/:user_key/:title', function (req, res, next) {
    var user_key = req.params.user_key;
    var title = req.params.title;
    var buffer = fs.readFileSync(user_key + '/' + title, 'utf8');
    console.log(user_key)
    console.log(title)
    console.log(buffer)
    res.send('respond with a resource');
});

module.exports = router;
