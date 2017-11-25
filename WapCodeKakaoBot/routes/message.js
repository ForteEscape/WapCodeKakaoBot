var express = require('express');
var router = express.Router();

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

function langCheck(code) {
    var extend = code.split('\n')[0];
    extend = extend.split('.')[1];
    console.log(extend);
    return extend;
}

module.exports = router;
