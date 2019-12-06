var express = require('express');
var router = express.Router();
// var fs = require('fs');
var multer = require('multer')


router.post('/', function (req, res) {
    // let body = req.body
    // // 数据
    // let list =[]
    // console.log(req,res)
    let array = {req:req,res,res}
    res.send({
        code: 1,
        msg: '获取列表成功',
        data: array
    });

});
module.exports = router;