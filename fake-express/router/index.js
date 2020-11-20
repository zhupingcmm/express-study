
const Layer = require('../layer');
const setPrototypeOf = require('setprototypeof')

const proto = module.exports = function(options = {}){

    function router(req,res,next){
        
    }

    // mixin 
    setPrototypeOf(router,proto);

    router.stack = [];

    return router;

}

proto.use = function(path, fn){

    const layer = new Layer(path, fn);

    this.stack.push(layer);
    console.log(this.stack)
}

proto.handle = function(req, res, out){
    console.log("Layer handle", req.path);
    console.log("this stack::", this.stack);
    
    res.write('ok');
    res.end();
    
}