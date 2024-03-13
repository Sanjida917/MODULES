
console.log('\n');
function doubleIt(number) {

    const doubled = number * 2;
    console.log('Double Of', number, 'is :', doubled);
}

doubleIt(20); //here 20 is an argument.
//The values for parameter which declared in a function call iscalled as an argumrnt.
//Syntax : functionName(argument);


//We can also pass the arguments as a variable.
const money = 25;
doubleIt(money);  //Here money is anargument.


function difference(father, mother) {

    const diff = father - mother;
    console.log("My Parents Age Difference Is :", diff,"\n");
}

const fatherAge = 50;
const motherAge = 45;


difference(fatherAge, motherAge);