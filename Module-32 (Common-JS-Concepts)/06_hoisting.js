
// In JavaScript, hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. 


//hoisting occurs here
print5();

// Error ---> Cannot access 'print10' before initialization
print10();

//no hoisting occured
for (let i = 0; i < 5; i++) {

    console.log(i);
}

//will get an error
// console.log("Outside : ",i);


//hoisting is heppend here
for (var j = 0; j < 5; j++) {

    console.log(j);
}


//output will be 5
console.log("Outside : ", j);


//function hoist
function print5() {

    console.log("Print :", 5);
}


const print10 = function () {

    console.log("Print : ", 10);
}