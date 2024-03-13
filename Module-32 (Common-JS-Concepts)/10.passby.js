
//Pass By value
//----------------------------------------------------------------------------------------------------------

// In Pass by value, the function is called by directly passing the value of the variable as an argument. So any changes made inside the function do not affect the original value.

// In Pass by value, parameters passed as arguments create their own copy. So any changes made inside the function are made to the copied value not to the original value

num1 = 5, num2 = 10;
function multiply(x, y) {

    x = 10;
    const result = x * y;
    return result;
}


console.log(num1);
const outpt = multiply(num1, num2);
console.log(outpt);
console.log(num1);



//Pass By Reference
//---------------------------------------------------------------------------------------------
// In Pass by Reference, Function is called by directly passing the reference/address of the variable as  an argument. So changing the value inside the function also change the original value. In JavaScript "Array and Object" follows pass by reference property.

// In Pass by reference, parameters passed as an arguments does not create its own copy, it refers to the original value so changes made inside function affect the original value. 



let student1 = { name: "Borshah", partner: "Samia" };
let student2 = { name: "Mitu", partner: "Promy" };


function makeMovie(couple1, couple2) {

    couple1.name = "Sadia";
}


console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);