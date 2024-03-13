
function add(num1, num2) {
    const result = num1 + num2;
    console.log("add result :", num1, num2, result);
    return result;
}


const sum = add(3, 7);
console.log("sum is :", sum);

const sum2 = add(5);
console.log("sum2 is :", sum2);

const sum3 = add();
console.log("sum3 is :", sum3);



// Default  --> if value is not provided, take this as a default.

function add2(num1, num2 = 0) {
    const result = num1 + num2;
    console.log("add2 result :", num1, num2, result);

    return result;
}


const sum4 = add2(5);
console.log("sum4 is :", sum4);

const sum5 = add2();
console.log("sum5 is :", sum5);


const sum6 = add2(3, 7);
console.log("sum6 is :", sum6);



function add3(num1 = 0, num2 = 0) {
    const result = num1 + num2;
    console.log("add3 result :", num1, num2, result);

    return result;
}


const sum7 = add3(5);
console.log("sum7 is :", sum7);

const sum8 = add3();
console.log("sum8 is :", sum8);


const sum9 = add3(3, 7);
console.log("sum9 is :", sum9);


function fullName(first, last = '') {

    const fullName = first + ' ' + last;
    return fullName;
}


function friends(numbs = []) {
    //for array : default object value is []

}

function person(human = {}) {
    //for object : default object value is {}

}