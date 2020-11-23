
const abc = new Proxy({}, {
    set: function(obj,key,val){
        obj[key] =val;

    },
    get: function(obj,key){
        // return obj[key];
        return 2233;

    }
})

abc.zp =1;
console.log(abc.aS)