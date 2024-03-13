/**
 * 8 ways to get undefined :
 * 
 * 1) Variable that is not initialized.
 * 2) Function with no return.
 * 3) Parameter that is not passed.
 * 4) If return hase nothing on the right side.
 * 5) Property that does not exist on an object.
 * 6) accessing the array elements outside of the index range 
 * 7) Deleting an array element inside 
 * 8) Set a value directl to undefined
 * 
*/



const a = undefined
const b = null;

//Undefined is "undefied" type value
console.log(typeof a);

//But null is an "Object" typed value
console.log(typeof b);


//We should not use "undefined" directly as a value, insted we can use 'null'

const me = { name: "Sanida", age: 24, hobby: 'Reading-books', favColor: null };
console.log(me.favColor, typeof me.favColor);