
const fs = require('fs');
const path = require('path');
const parseurl = require('parseurl');

module.exports = serveStaticCache;

function serveStaticCache(root){
    var root = root;
    var cache = {};
    // var self = this;
    cacheFile(root, cache);

    function cacheFile(filePath, cache) {
        print(path.resolve(__dirname,`../${filePath}`));
        async function print(filePath) {
            const files = await fs.promises.readdir(filePath);
            for (const file of files) {
              const keyPath = path.resolve(filePath,file);
              readContent(keyPath)
              .then(data=>{
                cache[keyPath] = data;
              })
              .catch(err=>{
                  console.log(err)
              })
            }
          }

        async function readContent(filePath){
            return await new Promise((resolve,reject)=>{
                fs.readFile(filePath,'utf8', (err, data) =>{
                    resolve(data);
                })
            })
        }
    }

    return function serveStaticCache(req, res, next){
        // console.log("chhhhh==",Object.keys(cache));
        console.log("======================");
        console.log(req.method);
        if(req.method === 'GET'){
            const {path, pathname} = parseurl(req);
            Object.keys(cache).find(key=>path.exec(path))
        }
        const hhh = parseurl(req);
        console.log(hhh);
        res.send(JSON.stringify({data: 1}));
        next();
    }
}