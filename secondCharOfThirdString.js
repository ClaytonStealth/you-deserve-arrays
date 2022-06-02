const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("enter an array: "));

if (typeof userArray[2][1]=== "string"){
    console.log("the second character of the 3rd item in your array " + userArray[2][1] + " is a string")
} else if (typeof userArray[2][1] !== "string"){
    console.log("error " + userArray[2][1] + " is not a string")
}