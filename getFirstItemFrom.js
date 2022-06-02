const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("enter an array: "));

console.log("the first item in the colors array is: " + userArray[0]);