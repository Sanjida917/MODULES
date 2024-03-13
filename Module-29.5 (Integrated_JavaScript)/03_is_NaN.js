

const val = 23;
const numbr = '22';
const numbr2 = '22ab';

console.log(isNaN(val));         //result is : false
console.log(isNaN(numbr));       //result is : false
console.log(isNaN(numbr2));      //result is : true
console.log(isNaN({}));          //result is : true
console.log(isNaN([]));          //result is : false
console.log(isNaN([5]));         //result is : false
console.log(isNaN({ 9: 8 }));    //result is : true
