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
//-->1.打开增加文章页面
router.get('/artsadd', function(req, res, next) {
        tags.find({}).toArray(function(err, data) {
            res.render('artsadd', { tags: data })
        })
    })
    //-->2.点击提交增加文章
router.post('/artsadd', function(req, res, next) {
        arts.insert(req.body)
    })
    //删除文章
router.get('/artsdelete', function(req, res, next) {
        arts.remove({ _id: ObjectId(req.query._id) })
    })
    //打开修改文章页面
router.get('/artsrem', function(req, res, next) {
    arts.find({ _id: ObjectId(req.query._id) }).toArray(function(err, arts) {
        tags.find({}).toArray(function(err, tags) {
            res.render('artsrem', { arts: arts, tags: tags })
        })
    })
})
router.post('/artsrem', function(req, res, next) {
    arts.findOneAndUpdate({ _id: ObjectId(req.query._id) }, req.body, function(err, data) {

    })
})







//展示标签列表
router.get('/tagslist', function(req, res, next) {
    tags.find({}).toArray(function(err, data) {
        res.render('tagslist', { tags: data })
    })
})

//打开增加标签页面
router.get('/tagsadd', function(req, res, next) {
        res.render('tagsadd')
    })
    //---2.点击提交
router.post('/tagsadd', function(req, res, next) {
    tags.insert(req.body)
})

//删除标签
router.get('/tagsdelete', function(req, res, next) {
    tags.remove({ _id: ObjectId(req.query._id) })
})


//标签修改
router.get('/tagsrem', function(req, res, next) {
    tags.find({ _id: ObjectId(req.query._id) }).toArray(function(err, data) {
        if (!err) {
            // console.log(data)
            res.render('tagsrem', { tag: data })
        }
    })
})
router.post('/tagsupdate', function(req, res, next) {
    // console.log(req.body)
    tags.findOneAndUpdate({ _id: ObjectId(req.query._id) }, req.body, function(err, data) {
        // console.log(req.body)
        // console.log(data)
        if (!err) {
            res.send('修改成功')
        }
    })
})





module.exports = router;
