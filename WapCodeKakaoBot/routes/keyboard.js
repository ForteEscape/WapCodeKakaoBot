var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    //console.log(req)
    var test = {
        "type" : "buttons",
        "buttons":["선택1","선택2","선택3"]
    };
    res.send(test)
});

module.exports = router;