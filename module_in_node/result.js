//call arithmetic function, get result and print result on terminal.

// how to import a module

//import using common js 
// const arithmeticmodule = require('./arithmetic');

// const result = arithmeticmodule.sum(10, 20);
// console.log(result);



//import using ES6
//for all element
import * as arithmeticmodule from './arithmetic.js';

console.log(arithmeticmodule.sum(10,20));
console.log(arithmeticmodule.num);

//one specified element
// import { sum } from './arithmetic.mjs';

// console.log(sum(10,20));
// console.log(arithmeticmodule.num);