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

    // 获取数据
    // connection.query('SELECT * from users', function (err, data, fields) {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     };

    //     res.send({
    //         code: 1,
    //         msg: '获取列表成功',
    //         data: data
    //     });
    // });

    // 新增数据
    // const user = { name: '小红', age: 17, id: 5 }
    // const sql = "INSERT INTO users SET ?"
    // connection.query(sql, user, function (err, data, fields) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.send({
    //             code: 1,
    //             msg: '新增成功',
    //             data: []
    //         });
    //     }
    // });

    // 删除
    // const sql = 'DELETE FROM users WHERE id=? '
    // connection.query(sql, 1, (err, result) => {
    //     if (err) {
    //         res.send({
    //             code: 0,
    //             msg: '删除失败',
    //             data: err
    //         })
    //     } else {
    //         res.send({
    //             code: 1,
    //             msg: '删除成功'
    //         })
    //     }
    // })

    // 编辑
    const user = { id: 2, name: '小红new', age: 22 }
    const sql = 'UPDATE users SET ? WHERE id = ?'
    connection.query(sql, [user, user.id], (err, result) => {
        if (err) {
            res.send({
                code: 0,
                msg: '编辑失败',
                data: err
            })
        } else {
            res.send({
                code: 1,
                msg: '编辑成功'
            })
        }
    })

    // 断开连接
    connection.end();

});
module.exports = router