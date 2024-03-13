function add(num1, num2) {

    
    console.log(num1, num2);
    console.log(arguments);
    //this is called array like object. 
    //it works only within a function.
}

add(12, 23, 33, 66, 87, 90);