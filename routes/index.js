var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});


//更多(展示所有的文章)
router.get('/More', function(req, res, next) {
    res.render('More')
});

//分类(展示某一类文章)
router.get('/classify', function(req, res, next) {
    res.render('classify')
});

//单篇(展示单个文章)
router.get('/singlePage', function(req, res, next) {
    res.render('singlePage')
})

module.exports = router;
