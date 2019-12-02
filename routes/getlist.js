let express = require('express');
let router = express.Router();

const mysql = require("mysql");

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '测试demo'
});
// 连接数据库
connection.connect();

router.post('/', function (req, res, next) {
    connection.query('SELECT * from users', function (err, data, fields) {
        if (err) {
            console.log(err);
            return;
        };

        res.send({
            code: 1,
            msg: '获取列表成功',
            data: data
        });
    });

    connection.end();

});
module.exports = router