var express = require('express');
var router = express.Router();
var Articles = require('../models/articles');

router.get('/', function(req, res, next) {
    Articles.find({},function(err, articles){
        console.log(articles);
      if(err){
       return res.json({'success':false, 'error': err});
     }
     res.render('articles/index', { title: 'Articles', articles:articles });
    });
  });

router.get('/:slug', function(req, res, next) {
  res.render('articles/view', { title: 'xxx' });
});

router.get('/app', function(req, res, next) {
  res.render('articles/app', { title: 'Article Management' });
});

module.exports = router;
