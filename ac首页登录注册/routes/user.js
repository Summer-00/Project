const express=require('express');
const pool=require('../pool.js');
//const bodyParser=require('body-parser');
var router=express.Router();

//添加路由

router.post('/login',function(req,res){
    console.log(req.body);
    //存入数据库
     pool.query("SELET*FROM user1",function(err,result){
    //     // ("登陆成功");
        if(err) throw err;
        //else console.log(result);
     })
    
});

router.post('/uid',function(req,res){
    console.log(req.body.uid);
    pool.query('select*from user1  where uid=?',req.body.uid,function (err,result){
        if(err) throw  err;
    	if(result.length>0){
            res.send('该手机号已注册');
          }else{
            res.send('手机号可用于注册');
          }
    })
    


});
router.post('/username',function(req,res){
    console.log(req.body.username);
    pool.query('select*from user1  where username=?',req.body.username,function (err,result){
        if(err) throw  err;
    	if(result.length>0){
            res.send('用户名已存在');
          }else{
            res.send('用户名可用');
          }
    })
    


});


// router.get('/myAjax',function(req,res){
//     console.log (req.body);

    
        
    
//     res.send("ajax数据");
// });

router.post('/reg',function(req,res){

    console.log(req,res);
    pool.query("insert into user1 set ?",req.body,function(err,result){
        if(err) throw err;
        else res.send("添加成功");



    })
});





//导出路由
module.exports=router;
