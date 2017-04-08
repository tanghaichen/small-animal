var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('public-aside');
});
//展示文章列表
router.get('/artslist', function(req, res, next) {
    res.render('artslist')
})

//增加文章
router.get('/artsadd', function(req, res, next) {
    res.render('artsadd')
})

//展示标签列表
router.get('/tagslist', function(req, res, next) {
    res.render('tagslist')
})

//增加标签
router.get('/tagsadd', function(req, res, next) {
    res.render('tagsadd')
})
module.exports = router;
