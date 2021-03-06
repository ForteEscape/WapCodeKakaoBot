var express = require('express');
var fs = require('fs');
var router = express.Router();


/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body.content);
    var ans = req.body.content;
    var user = req.body.user_key;
    var extend = langChk(ans);
    var title = getTitle(ans);

    console.log(user);
    if(!fs.existsSync(user)){
        fs.mkdirSync(user);
    }
    fs.writeFileSync('./'+user+'/'+title, ans, 'utf-8');

    res.send({
        "message":{
            "text":'http://13.125.18.115:3000'+'/'+get-file+'/'+user+'/'+title
        }
    });
});

function langChk(code) {
    var extend = code.split('\n')[0];
    extend = extend.split('.')[1];

    for(var i=0; i<extend.length; i++){
        if(!('a'<=extend.charAt(i) && extend.charAt(i)<='z' || 'A'<=extend.charAt(i) && extend.charAt(i)<='Z')){
            extend = extend.substr(0, i);
            break;
        }
    }
    return extend;

}

function getTitle(text) {
    var title = text.split('\n')[0];
    while (true) {
        if (!('a' <= title.charAt(0) && title.charAt(0) <= 'z' || 'A' <= title.charAt(0) && title.charAt(0) <= 'Z')) {
            if (!('a' <= title.charAt(0) && title.charAt(0) <= 'z' || 'A' <= title.charAt(0) && title.charAt(0) <= 'Z' || title.charAt(0) == '.')) {
                title = title.substr(1, title.length);
            }
            else {
                break;
            }
        }
        for (var i = 0; i < title.length; i++) {
            if (!('a' <= title.charAt(i) && title.charAt(i) <= 'z' || 'A' <= title.charAt(i) && title.charAt(i) <= 'Z' || title.charAt(i) == '.')) {
                title = title.substr(0, i);
                break;
            }
        }

        return title;
    }
}

    module.exports = router;
