const fs = require('fs');

fs.readFile("data.txt", (err, data) =>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString())
    }
})

//write data

fs.writeFile('emp1.txt', 'New Employee',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('File is written')
    }
})

fs.appendFile('emp1.txt','\nAnother emp',(err) => {
    if(err){
        console.log(err)
    }else{
        console.log('file is updated')
    }
})

fs.unlink('emp1.txt',(err) => {
    if(err){
        console.log(err)
    }else{
        console.log("file is deleted")
    }
})

console.log('this is another operation');