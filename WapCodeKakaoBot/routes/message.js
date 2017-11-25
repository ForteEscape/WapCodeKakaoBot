var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    console.log(req);
    res.send({'test':'ktj'});
});

module.exports = router;
