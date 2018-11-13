const express=require("express");
const userRouter=require('./routes/user.js');
const bodyParser=require('body-parser');
const  imgRouter=require('./routes/img.js');

var app=express();
app.listen(4000);


app.use(bodyParser.urlencoded({
    extended:false //
}));

app.use(express.static('public'));//托管
app.use('/user',userRouter);//路由器挂在到/user下
app.use('/img',imgRouter);