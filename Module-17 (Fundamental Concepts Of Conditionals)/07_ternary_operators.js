
//Ternary Operator:
//Conition ? execute if condition true : execute alternatives when false


//simple ternary :
const age =17;

const res=(age>=18) ? "Can Vote..!" : "Can't";
console.log(res);

//Also can write like this
(age>=18) ? console.log("Can Vote..!") : console.log("You Can't..!");




let price =500;
const isLeader = true;

if(isLeader === true) {
    price = 0;
}
else{
    price = price + 100;
}
console.log(price);


//Ternary Form
price = isLeader === true ? 0 : price + 100;

//Semi-Advanced Ternary :
price = isLeader === true ? price > 1000 ? price / 2 :  0 : price + 1000;