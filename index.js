const express = require("express");

//setting up express up 
const app = express();

app.get('/api', function(req, res){
    console.log('GET Rquest');
    res.end();
})

app.delete('/api', function(req, res){
    console.log('GET Rquest');
    res.send({name: "Yoshi"});
})
//listen for request 

app.listen(process.env.port || 4000, function(){
    console.log("request listening");
});
