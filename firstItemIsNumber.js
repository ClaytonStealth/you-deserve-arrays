const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("enter an array: "));

if (typeof userArray[0]=== "number"){
    console.log("the first item in your array " + userArray[0] + " is a number")
} else if (typeof userArray[0] !== "number"){
    console.log("the first item in your array " + userArray[0] + " is not a number")
}