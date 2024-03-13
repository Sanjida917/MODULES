
function eatRice() {
    console.log("Wash Your Had");
    console.log("Sit Properly");
    console.log("Eat the meal \n");
}

eatRice();


//function parameter
//Syntax : function functionName (parameter)
//If we cannot pass the value of parameter within a function,then "Undefined" will show in our output terminal.
//We can use the parameters only in a function.

function squareFunc(a) {

    const square = a * a;
    console.log("The Square Of", a, "is :", square);
}

squareFunc(5);
console.log("------------------------------------------------------------");

squareFunc(10);
console.log("--------------------------------------------------------------");

squareFunc(15);
console.log("--------------------------------------------------------");



//A function for add numbers

function add(num1, num2) {
    const sum = num1 + num2;
    console.log('\nSum of', num1, 'and', num2, 'is :', sum);
}

add(10, 20);
add(100, 200);


//We can also use more than two parameters
function addAll(a, b, c, d, e) {
    const sum = a + b + c + d + e;
    console.log('\nSum of', a, b, c, d, 'and', e, 'is :', sum);
}

addAll(10, 20, 29, 55, 10);
