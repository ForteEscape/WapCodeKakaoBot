var express = require('express');
var fs = require('fs');
var router = express.Router();

router.post('/', function(req, res, next) {
    var ans = req.body.content;
    var user = req.body.user_key;
    var extend = langCheck(ans);
    var title = getTitle(ans);
    fs.writeFileSync(user+'/'+title, ans, 'utf8');
    res.send({
        "message": {
            "text": extend
        }
    });
});

function langCheck(code) {
    var extend = code.split('\n')[0];
    extend = extend.split('.')[1];
    for(var i=0;i<extend.length;i++){
        if(!('a'<=extend.charAt(i) && extend.charAt(i)<='z' || 'A'<=extend.charAt(i) && extend.charAt(i)<='Z')){
            extend = extend.substr(0,i);
            break;
        }
    }
    return extend;
}

function getTitle(text) {
    var title = text.split('\n')[0];
    console.log('**********');
    console.log(title);
    for(var i=0;i<title.length;i++){
        if(!('a'<=title.charAt(i) && title.charAt(i)<='z' || 'A'<=title.charAt(i) && title.charAt(i)<='Z')){
            title = title.substr(i+1,title.length);
        }
        else{
            break;
        }
    }
    console.log(title);
    for(var i=0;i<title.length;i++){
        if('a'<=title.charAt(i) && title.charAt(i)<='z' || 'A'<=title.charAt(i) && title.charAt(i)<='Z' || title.charAt(i)=='.'){
            title = title.substr(0,i);
            break;
        }
    }
    console.log(title);
    console.log('**********');
    return title;
}

module.exports = router;
