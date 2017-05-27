const express=require('express')
var router=express.Router()
const app=express();

router.get('/list',function(req,res){

	res.send('GET Method By List');

})

router.post('/list',function(req,res)
{

	res.send(req.body.name);
})
router.put('/list',function(req,res){

	res.send(req.body);
})

router.delete('/list',function(req,res){

res.send(req.body);

})


router.delete('/list/name/:name1',function(req,res){

	res.send(req.params.name1)
})

module.exports=router