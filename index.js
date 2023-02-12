const express=require('express');

const app=express();

app.get("/",(req,res)=>{
     res.send('started listening');
})

app.listen(3000);