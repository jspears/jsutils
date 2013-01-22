#!/usr/bin/env node
var fs = require('fs');

function depth(obj, str) {
        if (!(obj && str)) return obj;
        var parts = str.split('.');
        while ((obj = obj[parts.shift()]) && parts.length);
        return obj;
}
function read(file, path){
    fs.readFile(file, 'utf8', function (err, data) {

        if (err) {

            console.log('Error: ' + err);

            return;

        }
        data = JSON.parse(data);
        console.dir(depth(data, path));
        process.exit(0);
    });

}
if (process.argv.length < 3){
    console.log('usage: '+process.argv[1]+" <file> (path)")
    process.exit(1);
}else
    read.apply(this, process.argv.slice(2));
