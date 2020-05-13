const express = require('express');
const app = express();

const userInfo = {
    name:'vickyrong',
    sex:'女',
    email:'515020842@qq.com',
    nation:'China'
}
app.post('/getUserInfo',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.send(userInfo)
});

app.listen(3030,()=> console.log('listening on port 3030!'))