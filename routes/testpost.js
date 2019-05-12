var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
    // console.log(req, res, next)
    if(req.body.status==0){
        res.send({
            msg:'前端传过来的status是0'
        })
    }else if(req.body.status==1){
        res.send({
            msg:'前端传过来的status是1'
        })
    }else{
        res.send({
            code: 0,
            msg: '获取列表成功',
            data: [
                {
                    name: '陈世亮2323',
                    age: '24323'
                },
                {
                    name: '李小龙3232',
                    age: '333232'
                }
            ]
        });
    }
});

module.exports = router;
