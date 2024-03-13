let a = 5;
let b = 7;

console.log("Before Swap :", a, b);

const tempu = a;
a = b;
b = tempu;

console.log("After Swap :", a, b);

//-----------------------------Another way--------------------------------

let x = 1;
let y = 2;
console.log("Before Swap :", x, y); //here semicolon(;) is must needed


[x, y] = [y, x];
console.log( "After Swap :",x, y);