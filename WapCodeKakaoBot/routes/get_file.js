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
    var sc = '<html><head><script type="text/javascript" src="/javascripts/syntaxhighlighter/shCore.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shLegacy.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushBash.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushCpp.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushCSharp.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushCss.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushDelphi.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushDiff.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushGroovy.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushJava.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushJScript.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushPhp.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushPlain.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushPython.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushRuby.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushScala.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushSql.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushVb.js"></script>\n' +
        '<script type="text/javascript" src="/javascripts/syntaxhighlighter/shBrushXml.js"></script>\n' +
        '<link type="text/css" rel="stylesheet" href="/stylesheets/syntaxhighlighter/shCore.css">\n' +
        '<link type="text/css" rel="stylesheet" href="/stylesheets/syntaxhighlighter/shThemeDefault.css">\n' +
        '<script language="javascript">' +
        'dp.SyntaxHighlighter.HighlightAll(\'code\');' +
        '</script>'+
        '</head><body>';
    //console.log(user_key);
    //console.log(title);
    //console.log(buffer);
    buffer = buffer.replace('<', '&lt');
    buffer = buffer.replace('>', '&gt');
    var st = sc + '<pre class="brush: cpp">' + buffer + '</pre></body></html>';
    console.log(st);
    res.send(st);
});

module.exports = router;
