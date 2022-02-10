const express = require("express");

//setting up express up 
const app = express();

//listen for request 

app.listen(process.env.port || 4000, function(){
    console.log("request listening");
});
