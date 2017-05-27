const express=require('express')
var bodyParser=require('body-parser')

const app=express();

app.use(bodyParser.urlencoded({extended:false}))

app.get('/',function(req,res){

res.send('Hello this is Rohit')

})
app.post('/',function(req,res){

res.send(req.body.name);

})

app.put('/',function(req,res){

	res.send(req.body.name);
})


app.delete('/',function(req,res){

	res.send(req.body);
})

app.listen(5000,function(){

})
