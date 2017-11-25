var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    var test = {'hi':'chat_room/test'}
    res.send(test)
});

module.exports = router;
