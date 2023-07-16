const { Console } = require("console");
const express = require("express");

const app = express();
const PORT = 2023;
const HOSTNAME = 'localhost'

app.get('/',(req, res)=>{
    res.send("hello word!");
})
 
app.listen(PORT,()=>{
    console.log('server running at ${HOSTNAME}: ${PORT}');
});