var express = require('express');
var router = express.Router();
var db = require('../Database/database');
var bodyParser = require('body-parser');

router.get('/blog', (req, res)=>{
    db.any('SELECT * FROM blog, author')
    .then((data)=>{
        res.render('blog', {
            blog: data
        })
    })
});

router.use(bodyParser.urlencoded({extended: false}));

router.post('/blog', (req, res)=>{
    var title = req.body.title;
    var author = req.body.author;
    var body = req.body.body;
    var bio = req.body.bio;
    var imageURL = req.body.img_path;

    db.none("INSERT INTO blog(username, post_date, blog_id, body) VALUES($1, $2, $3, $4)", [username, post_date, blog_id, body])
    .then((data)=>{
        db.any('SELECT * FROM blog')
        .then((results)=>{
            res.render('blog', {
                blog: results
            })
        })
    })
})

router.get('/newblog', (req, res)=>{
    res.render('newblog');
})


module.exports = router;

