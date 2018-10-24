var express = require('express');
var history = require('connect-history-api-fallback');
var serveStatic = require('serve-static');
var compression = require('compression');
var bodyParse = require('body-parser');
var moment = require("moment");

// var Sequelize = require('sequelize');
// const db = new Sequelize('mysql://root:jiaojian@localhost/',{
//   define: {
//     timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
//   }
// });

var path = 'dist/coms/views'
//端口
var port = 4002;
var app = express();
//浏览器刷新
app.use(history());
//gzip
app.use(compression())

//parse json
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))

//文件内容
app.use(serveStatic('dist', {'index': ['Index.html']}));
app.use(serveStatic('dist/coms/views', {'index': ['Index.html']}));


app.post('/login', function(req, res) {
  
  var body = req.body;
  
  if (!body.username || !body.password) {
    res.send(401, {
      status: 'failed',
      code: 401,
      message: '信息填写错误'
    });
    return;
  }
  
  var promise = new Promise(function (resolve, reject) {
    var sql = 'select * from users where username = "' + body.username + '";';
    db.query(sql).then(function (result) {
      var password = result[0][0].password;
      if (password == body.password) {
        res.send(200, {
          status: 'success',
          code: 200,
          message: '登录成功'
        });
        return;
      } else {
        res.send(401, {
          status: 'failed',
          code: 401,
          message: '信息填写错误'
        });
        return;
      }
    })
  })
})


//服务
app.listen(port,function(){
  console.log('Server on http://localhost:%s', port);
})
