
function sum(a, b, c) {


    // arguments is array like object.
    console.log(arguments);
    console.log(arguments[4], typeof arguments);


    //we can loop and console the elements of arguments
    for (argument of arguments) {
        console.log(argument);
    }

    //we can also convert the argument into an array
    const args = [...arguments];
    console.log("Converted Array Of Arguments Is :", args);


    const result = a + b + c;
    return result;
}

const total = sum(21, 55, 67, 89, 23, 45, 55, 67, 91, 50);
console.log(total);

//function.length returns the numbers of parameter within the function.
console.log(sum.length);//3 parameters


