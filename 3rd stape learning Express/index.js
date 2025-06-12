const express = require('express')
const app = express()

app.get('/', (req,res) =>{
    res.send('Hi this is Home page');
})

app.get('/about',(req,res)=>{
    res.send(`This is About page Name: ${req.query.name}`)
})

app.listen(8000,()=>console.log("Server is Ready!"));