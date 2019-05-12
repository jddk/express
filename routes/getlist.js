var express = require('express');
var router = express.Router();


router.post('/', function (req, res, next) {
    let body = req.body
    // 数据
    let list = [{
        title:'测试一',
        start:'2019-05-11 09:30',
        end:'2019-05-11 17:10',
        addr:'武汉光谷',
        join_user:['剑圣','德邦']
    },{
        title:'测试二',
        start:'2019-05-11 11:30',
        end:'2019-05-11 14:10',
        addr:'武汉中南',
        join_user:['武器大师','光头']
    },
    {
        title:'测试三',
        start:'2019-05-09 09:30',
        end:'2019-05-09 14:10',
        addr:'武汉街道口',
        join_user:['亚索']
    },
    {
        title:'测试四',
        start:'2019-05-15 11:30',
        end:'2019-05-15 17:10',
        addr:'武汉中南',
        join_user:['武器大师','光头']
    },
    {
        title:'测试五',
        start:'2019-05-16 11:30',
        end:'2019-05-16 12:10',
        addr:'武汉街道口',
        join_user:['亚索']
    }]
    // 筛选数据
    let array = list.filter(item=>item.start.split(' ')[0]==body.start&&item.end.split(' ')[0]==body.end)
    res.send({
        code:1,
        msg:'获取列表成功',
        data:array
    });

});

module.exports = router;
