
module.exports = Layer;

function Layer(path, fn){
    this.path = path;
    this.handle = fn;
}
