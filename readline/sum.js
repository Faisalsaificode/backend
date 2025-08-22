// import readline 
const readline = require("readline");

// configure interface to connect with terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// reading values
rl.question("Enter First Number: ", (num1) => {
    rl.question("Enter Second Number: ", (num2) => {
        const sum = Number(num1) + Number(num2);
        console.log(`The sum is: ${sum}`);
        rl.close(); // close the interface
    });
});
