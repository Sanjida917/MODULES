
//In Strongly Type Programming Language :

// int a = 8;
// string s = "ALLAH"
// bool c = true
// object student = {name : "pompom", id : 9}
// int[] numbers = [11,44,66];
// string[] names = ["Jui","Belly","Mala"];



//JS is "Dynamic Type" Programming Language
//Primitive Data Types
//The Primite data does not share the same memory location or locate in different memory location.

const a = 5;
const b = "LALLALALALAL";
const d = true;
//null
//Undefined



//Non-Primitive Data Types
//The non-primitive data always share the same memory location.That's why if anyone is changed then other one also changed as well.
const ages = [21, 55, 66, 13, 44];
const student = { id: 10, name: 'flowers', color: "Orange" };


console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;

console.log(x, y);


y = 7;
//here value is re-assigned
console.log(x, y);



const p = { job: "WEB_DEVELOPER" }

let q = p;
console.log(p, q);

q.job = "Fontend Developer";
//because they shared the same memory location
console.log(p, q);


//But if we do it will make a new memory for own
q = { job: "Backend-Developer" }
console.log(p, q);
