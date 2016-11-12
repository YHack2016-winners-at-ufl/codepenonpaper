var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', {
        output: {
            javascript: 'var msg = "hello world"; alert(msg);',
            html: '<h2 id="#exout">example html output</h2>',
            css: '#exout {font-size: 50px;color:red}'
        }
    });
});

module.exports = router;
