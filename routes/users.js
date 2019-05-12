var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    code:0,
    msg:'获取列表成功',
    data:[
      {
        name:'陈世亮',
        age:'24'
      },
      {
        name:'李小龙',
        age:'33'
      }
    ]
  });
});

module.exports = router;
