const proto = require('./application');
// const setPrototypeOf = require('setprototypeof');
var mixin = require('merge-descriptors');
exports = module.exports = createApplication;

function createApplication (){
    const app = function(req, res, next){
        console.log(123);
        // setPrototypeOf(app, proto);
        app.handle(req,res, next);
    }
    console.log("a[[==pp",app)
    //merge the app and application
    mixin(app, proto, false);
    
    return app;
}