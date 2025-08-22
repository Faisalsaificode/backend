// const fs = require('fs');

// // To read file content using Blocking code   manged by main thread

// console.log('starting to read');

// const buffer = fs.readFileSync("data.txt", {encoding:'utf8'});
// console.log(buffer) //toString()


// console.log('this is another operation being performed')








//write data

const fs = require('fs');

fs.writeFileSync("emp.txt", 'name: faisalsaifi, age: 24, postion: manager')

//append another emp data
fs.appendFileSync("emp.txt", 'name: fouzi, age: 21, postion:ceo');

//deleting a file
try{
fs.unlinkSync('emp.txt');
}catch(err){
    console.log("file not found")
}
console.log('this is another operation being performed')