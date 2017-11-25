var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    var test = {'hi':'friend'}
    res.send(test)
});

router.delete('/test', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    var test = {'hi':'friend/test'}
    res.send(test)
});

module.exports = router;
