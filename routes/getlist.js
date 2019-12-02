var express = require('express');
var router = express.Router();





const mysql = require("mysql");
router.post('/', function (req, res, next) {

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: '测试demo'
    });

    connection.connect();

    connection.query('SELECT * from users', function (err, data, fields) {
        if (err) {
            console.log(err);
            return;
        };

        console.log(data);
    });

    connection.end();

    res.send({
        code: 1,
        msg: '获取列表成功',
        data: []
    });




});
module.exports = router