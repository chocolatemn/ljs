//引入框架
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
 
const app = express();
const port = 3000;
 
app.use(bodyParser.urlencoded({ extended: true }));

// 是否要提供前端服务
// app.use(express.static('public')); // 设置静态文件目录

//与页面上form action的值一致
app.post('/submit-message', (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var custom_select = req.body.custom_select;
  var custom_select1 = req.body.custom_select1;
  var message = req.body.message;
  console.log(req.body);
  // console.log(name,email,message,custom_select,custom_select1);
  fs.appendFile('messages.txt', name+'\n'+ email + '\n'+ custom_select + '\n'+ custom_select1 + '\n'+ message + '\n\n', (err) => {
    if (err) throw err;
    console.log('Message saved!');
    res.redirect('http://localhost:8000/index.html'); // 留言保存后重定向回首页
  });
});

//正在侦听
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

//启动侦听\保存留言服务
//目录下执行node server.js

// 确保你已经安装了express和body-parser：
// npm install express body-parser