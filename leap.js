"use strict";

const year1 =require("prompt-sync");
const prompt=year1();

let year=prompt("enter");

if(year%400==0 || year%100!=0 && year%4==0) {
    console.log("Leap Year");
}
else{
    console.log("Not a Leap Year");
}
