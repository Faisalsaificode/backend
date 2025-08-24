const fs = require('fs');
const path = require('path');


//reading data

const filepath = path.join('src','home','data.txt');
const filepathresolve = path.resolve('src','home','data.txt');
console.log(filepath);
console.log(filepathresolve);
console.log(path.extname(filepath))

fs.readFile(filepath,(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})
