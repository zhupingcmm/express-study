// const express = require('express');
const express = require('express');
const app = express();
const prot = 3008;

app.use((req, res, next)=>{
    console.log('sad====assaas');
    next();
})
app.use('/dist', express.static('dist'));

app.get('/',(req, res)=>{
    res.send('zp')
});
// app.get('/index.js',(req, res)=>{
//     res.send("abc")
// })



app.listen(prot, ()=>{
    console.log(`server is listen on http://localhost:${prot}`)
})

