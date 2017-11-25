var express = require('express');
var router = express.Router();
var langCheck = require('./languageCheck');

router.post('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    var ans = req.body.content;
    var ansTxt = '';
    console.log(ans);
    var extend = langCheck(ans);
    console.log(extend);
    res.send({
        "message": {
            "text": extend
        }
    });
});

module.exports = router;
