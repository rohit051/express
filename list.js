const express=require('express')
var router=express.Router()
const app=express();

router.get('/',function(req,res){

res.send('Get Method');

})

router.post('/',function(req,res){

	res.send(req.body.name);
})

router.put('/', function(req,res){

res.send(req.body.name);

})

router.delete('/',function(req,res){

	res.send(req.body)
})

module.exports=router


