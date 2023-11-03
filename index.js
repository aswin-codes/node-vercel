const express = require('express');
const server = express();

server.use(express.json())
server.get('/',async(req,res)=>{
    res.json({
        "msg" : "testing"
    })
})

server.post('/api/test', async (req,res) => {
    
    const {msg} = req.body;
    res.json({
        "msg" : `Hello ${msg}`
    })
})

server.listen(3000,() =>{
    console.log("Server is running")
})