// const http = require('http');
const express = require('./express');
const port = 3010;

const app = express();
console.log("app:",app)

app.use('/home',(req, res)=>{
    console.log(1)
});

app.get('/abc', (req, res) =>{
    console.log("sad");
});

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
});