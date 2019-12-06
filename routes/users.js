var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var User = mongoose.model('User')


router.get('/',function(req,res,next){
  res.send('respond witdh a resouce')
})

router.get('/test',function(req,res,next){
  var user = new User({
    uid:1333,
    username:'陈世亮'
  })

  user.save(function(err){
    if(err){
      res.end('Error');
      return next()
    }

    User.find({},function(err,docs){
      if(err){
        res.end('Error')
        return next()
      }

      res.json(docs)
    })
  })
})
module.exports = router;
