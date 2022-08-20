"use strict";

const cel=require("prompt-sync");
const prompt=cel();



let c=prompt("Enter Temperature  in celcius\n:");
var f=prompt("Enter Temperature  in Fahrenheit\n:");
let ans1=((f-32)*5)/9;
console.log(f+"\u00B0 F is "+ans1+"\u00B0 C");
let ans2=((c*9)/5)+32;
console.log(c+"\u00B0 C is "+ans2+"\u00B0 F");
