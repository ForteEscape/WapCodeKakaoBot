var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    console.log(req.toString())
    var test = {'Keyboard':'hello'}
    res.send(test)
});

module.exports = router;
