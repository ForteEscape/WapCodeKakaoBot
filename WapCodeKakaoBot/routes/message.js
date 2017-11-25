var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    console.log(req.body.content);
    res.send({
        "message": {
            "text": req.body.content + ':by.ktj'
        }
    });
});

module.exports = router;
