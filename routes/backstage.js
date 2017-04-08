var express = require('express'),
    router = express.Router(),
    myClient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectId,
    server = 'mongodb://localhost:27017/animal',
    arts, tags;

myClient.connect(server, function(err, data) {
    if (!err) {
        arts = data.collection('arts');
        tags = data.collection('tags');
    }
})

myClient.connect(server, function(err, db) {
    if (!err) {
        arts = db.collection('arts');
        tags = db.collection('tags');
    }
})

router.get('/', function(req, res, next) {
    res.render('tagsadd');
});


//展示文章列表
router.get('/artslist', function(req, res, next) {
    arts.find({}).toArray(function(err, data) {
        if (!err) {
            res.render('artslist', { arts: data })
        }
    })
})

//增加文章
router.get('/artsadd', function(req, res, next) {
    tags.find({}).toArray(function(err, data) {
        res.render('artsadd', { tags: data })
    })
})

//展示标签列表
router.get('/tagslist', function(req, res, next) {
    tags.find({}).toArray(function(err, data) {
        res.render('tagslist', { tags: data })
    })
})

//增加标签
router.get('/tagsadd', function(req, res, next) {
    res.render('tagsadd')
})
module.exports = router;
