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
    var sc = '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shCore.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shLegacy.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushBash.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushCpp.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushCSharp.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushCss.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushDelphi.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushDiff.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushGroovy.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushJava.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushJScript.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushPhp.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushPlain.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushPython.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushRuby.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushScala.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushSql.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushVb.js"></script>\n' +
        '<script type="text/javascript" src="../public/javascripts/syntaxhighlighter/shBrushXml.js"></script>\n' +
        '<link type="text/css" rel="stylesheet" href="../public/stylesheets/syntaxhighlighter/shCore.css">\n' +
        '<link type="text/css" rel="stylesheet" href="../public/stylesheets/syntaxhighlighter/shThemeDefault.css">\n' +
        '<script type="text/javascript">\n' +
        'SyntaxHighlighter.all();\n' +
        '</script>' +
        '<body Onload="dp.SyntaxHighlighter.HighlightAll(\'code\');">';
    console.log(user_key);
    console.log(title);
    console.log(buffer);
    res.send(sc+'<textarea name="code" class="brush:cpp;">'+buffer+'</textarea>');
});

module.exports = router;
