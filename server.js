const express=require('express');
var bodyParser=require('body-parser')
const app=express();

var router=express.Router();
app.use(bodyParser.urlencoded({extended:false}))

console.log('working');


var list=require('./list');
app.use('/',list);

var user=require('./user');
app.use('/user',user)

app.listen(100);