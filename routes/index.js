var express = require('express'),
    router = express.Router(),
    myclient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectId,
    server = 'mongodb://localhost:27017/animal',
    arts, tags;
myclient.connect(server, function(err, data) {
    if (!err) {
        arts = data.collection('arts');
        tags = data.collection('tags');
    }
})


/* GET home page. */
router.get('/', function(req, res, next) {
    arts.find({}).toArray(function(err, data) {
        // console.log(data)
        res.render('index', { arts: data });
    })
});


//更多(展示所有的文章)
router.get('/More', function(req, res, next) {
    arts.find({}).toArray(function(err, data) {
        if (!err) {
            tags.find({}).toArray(function(err,tags){
            res.render('More', { arts: data ,tags:tags});
            })
        }
    })
});

//分类(展示某一类文章)
router.get('/classify', function(req, res, next) {
    arts.find({ tag: req.query.tag }).toArray(function(err, data) {
        tags.find({}).toArray(function(err,tags){
        res.render('classify', { arts: data ,tags:tags})
        })
    })
});

//单篇(展示单个文章)
router.get('/singlePage', function(req, res, next) {
    arts.find({ _id: ObjectId(req.query._id) }).toArray(function(err, data) {
        tags.find({}).toArray(function(err,tags){
        res.render('singlePage', { art: data ,tags:tags})
        })
    })
})

module.exports = router;
