
//The rest operator is denoted by three dots (...) as a prefix followed by the name of the parameter. The rest operator is always given as the last parameter and a function definition can have only one rest operator else the code throws a SyntaxError error in both cases.

function myBio(firstName, lastName, ...otherInfo) {
    return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
const bio = myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");


console.log(bio);



function fun(a, b, ...c) {  
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Lionel'));
}


fun('Mukul', 'Latiyan', 'Lionel', 'Messi', 'Barcelona');