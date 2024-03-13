

//GLOBAL SCOPE
let year = 2024;

//Const is block scope value 
//whereas var is not a scope value

function add(a, b) {

    //FUNCTION SCOPE

    //Here it is seen that the "current" variavle is declared within the else block. But By Default If is declared itself here(inside the function).And this is called "Hoisting".

    //var current;  ---> Here Hoisting has occoured here.

    //here scope of a and b value is within the function.Can't use a and b outside of the function

    if (b > 5) {

        //BLOCK SCOPE
        //here scope of the sum value is within if block.

        //here sum is a block scope value
        const sum = 25 + a + b;
    }

    else {

        //BLOCK SCOPE
        //here scope of this sum value is within else block.This is called block scope

        //here sum is a block scope value
        const sum = 5 + a + b;


        //but var(current) is not a block scope value/function scope
        var current = sum;
    }
    console.log(current);



    //here scope of the "return value "is within the function whict can't use outside of the function.
    const total = a + b;
    return total;

}


add(10, 5);

//result is undefined because current value is now not declared becase of the condition.
//the "current" value is now like ---> var current ; 
add(10, 10);
