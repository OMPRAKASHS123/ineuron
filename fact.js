"use strict";

const fa=require("prompt-sync");
const prompt=fa();


var n=prompt("Enter Number:");
var fact=1;
for(let i=1;i<=n;i++){
    fact=fact*i;
}
console.log("Factorial of Number f is "+fact);