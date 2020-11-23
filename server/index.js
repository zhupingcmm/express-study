// const express = require('express');
const express = require('express');
var bodyParser = require('body-parser')
var session = require('express-session')
var cookieParser = require('cookie-parser')
var serverStaticCache = require('../serve-static-cache');
const app = express();
const prot = 3015;



// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
  

app.use('/', express.static('dist'));
app.use('/data', serverStaticCache('assets'))
//

const sessionConfig = {
    name:'rate-app',
    secret: 'keyboard cat', 
    cookie: { maxAge: 60000 }
};

app.use(session(sessionConfig))
app.use(cookieParser())

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', (req, res, next) =>{

    // const { view } = req.session;

    if(req.session.view){
        req.session.view++;
    }else{
        req.session.view = 1;
    }

    // console.log('res body::', req.body, req);

    // console.log('res:====', req)
    res.type('application/json')
    res.cookie('zp',1);
    res.send(JSON.stringify({status:200}));
    next();
})

// app.get('/data', (req,res, next)=>{

//     // console.log("cookie", req.session.view, req.cookies);

//     res.send(JSON.stringify({data: 1}));
// })



app.listen(prot, ()=>{
    console.log(`server is listen on http://localhost:${prot}`)
})

