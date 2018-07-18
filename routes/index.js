var express = require('express');
var router = express.Router();
const submitsingleuser = require('../model/submitsingleuser');
const getallusers = require('../model/getallusers');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'helloworld' });
});
router.get('/test',(req,res,next)=>{
  res.send({msg:'test'});
});
// 接口
// 创建用户的接口
router.post('/submitsingleuser',submitsingleuser);
// 获取所有用户的接口（用户管理）
router.get('/getallusers',getallusers);


module.exports = router;
