const http = require('http');
const Router = require('./router');
const methods = require('methods');
const app = module.exports =  {};

app.listen = function(){
    // console.log("ythhh",this)
    const server = http.createServer(this);
    // console.log("arguments::", arguments, typeof arguments)
    server.listen.apply(server, arguments);
};

app.use = function(...args){
    let path = '/';
    console.log('fn::',args);
    //the 1 arg is path
    path = args[0];
    console.log(path);
    this.lazyrouter();
    let router = this._router;
    console.log("router::=====",router)
    router.use(path, args[1]);
}

app.lazyrouter = function lazyrouter() {
    if(!this._router){
        this._router = new Router();
    }
}

app.handle = function(req, res, callback){
    console.log("application handler", req.method);
    let router = this._router;
    router.handle(req, res, callback)
}

methods.forEach(function(method){
    app[method] = function(path){
        this.lazyrouter();
        let router = this._router;
        console.log("Array.prototype.slice.call(arguments, 1)",Array.prototype.slice.call(arguments, 1))
        router.use(path, Array.prototype.slice.call(arguments, 1));
        return this;
    }
})