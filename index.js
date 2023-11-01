const express = require('express');
const server = express();

server.get('/',async(req,res)=>{
    res.json({
        "msg" : "testing"
    })
})

server.listen(3000,() =>{
    console.log("Server is running")
})