var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/More',function (req,res,next) {
    res.render('More');
});
router.get('/singlePage',function (req,res,next) {
    res.render('singlePage');
});
router.get('/classify',function (req,res,next) {
    res.render('classify');
});
module.exports = router;
