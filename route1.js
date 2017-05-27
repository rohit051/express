const express=require('express')
var bodyParser=require('body-parser')

const app=express();

app.use(bodyParser.urlencoded({ extended : false }))

app.get('/list',function(req,res){

res.send('Hello I am Rohit')

})

app.post('/list', function(req,res){

res.send(req.body.name)

})

app.put('/list/:id',function(req,res)
{
	res.send(req.params.id);
})

app.put('/list',function(req,res){

	res.send(req.body)
})

app.delete('/list/:surname',function(req,res){

res.send(req.params.surname)

})

app.listen(7000,function(){

})