var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    var ans = req.body.content;
    var ansTxt = '';
    console.log(ans);
    if(ans=='C'){
        ansTxt = 'C언어 입니다.';
    }
    else if(ans=='C++'){
        ansTxt = 'C++ 입니다';
    }
    else{
        ansTxt = '등록되지 않은 언어입니다';
    }
    res.send({
        "message": {
            "text": ansTxt
        }
    });
});

module.exports = router;
