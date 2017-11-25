var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/:user_key/:title', function (req, res, next) {
    var user_key = req.params.user_key;
    var title = req.params.title;
    var buffer = fs.readFileSync(user_key + '/' + title, 'utf8');
    var sc = '<link rel="stylesheet" href="/stylesheets/highjs/default.css">\n' +
        '<script src="/javascripts/highjs/highlight.pack.js"></script>\n' +
        '<script>hljs.initHighlightingOnLoad();</script> ';
    //console.log(user_key);
    //console.log(title);
    //console.log(buffer);
    buffer = buffer.replace('<', '&lt');
    buffer = buffer.replace('>', '&gt');
    var st = sc+'<pre><code class="c">' + buffer + '</pre></code>';
    console.log(st);
    res.send(st);
});

module.exports = router;
