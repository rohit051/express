const express=require('express')
var bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
									

app.post('/', function (req, res, err) {
  res.send(req.body.name)
})

app.listen(4000,function(){

})