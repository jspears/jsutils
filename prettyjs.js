#!/usr/bin/env node
var fs = require('fs');

function depth(obj, str) {
        if (!(obj && str)) return data;
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
read.apply(this, process.argv.slice(2));
