const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("enter an array: "));

console.log("the last item in the array array is: " + userArray[userArray.length-1]);