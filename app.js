
var express=require("express");
var bodyParser=require("body-parser");
  
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gfg');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback)
{
    console.log("");
    console.log("---------------------------------");
    console.log("SERVER CONNECTED");
    console.log("---------------------------------");

})
  
var app=express()
  
  
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.post("/sign_up", function(req,res){
    var fname = req.body.fname;
    var lname = req.body.lname;

    var email =req.body.email;
    var pword = req.body.pword;
    var pword1 = req.body.pword1;

    //var phone =req.body.phone;
  
    var data = {
        "fname": fname,
        "lname": lname,
        "email":email,
        "password":pword,
        "password1":pword1
        //"phone":phone
    }
db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Added to the database");          
    });        
    return res.redirect('draw.html');
})
  
  
app.get('/',function(req,res){
res.set({
    'Access-control-Allow-Origin': '*'
    });
return res.redirect('try.html');
}).listen(4000)
  
  
console.log("server listening at port 3000");