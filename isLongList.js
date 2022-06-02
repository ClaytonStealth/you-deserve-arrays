const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("enter an array: "));
console.log(userArray);

if(userArray.length >= 10){
    console.log("the length of this array is at least 10: " + userArray.length)
} else if(userArray.length < 10){
    console.log("your array length is too short: " + userArray.length);
}