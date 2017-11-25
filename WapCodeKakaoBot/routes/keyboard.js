var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    console.log(req)
    var test = {
        "type" : "buttons",
        "buttons" : ["선택 1", "선택 2", "선택 3"]
    };
    res.send(test)
});

module.exports = router;
