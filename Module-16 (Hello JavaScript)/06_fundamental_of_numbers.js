var orangePrice = 22;
var chocolatePrice = 20.5;
var appleePrice = '20';


// data types
console.log(typeof orangePrice);
console.log(typeof chocolatePrice);
console.log(typeof appleePrice);

// we can also print like this

console.log(orangePrice + chocolatePrice);
console.log(orangePrice + appleePrice);

// We can aslo converts the types of data.
// Here converts the string data tyes into a integer data

var mangoPrice= '50';
console.log(mangoPrice)
console.log(typeof mangoPrice);

console.log(parseInt (mangoPrice));
console.log(typeof mangoPrice);


var jackFruit= 'kkssjbxcvbnmiugtfd';
console.log(parseInt (jackFruit));

console.log(parseInt (chocolatePrice));
console.log(parseFloat (appleePrice));
console.log(parseFloat (orangePrice));




var first = 0.2;
var second = 0.1;

var total = first + second;

console.log(total);

console.log(total.toFixed(3));  //The result will be a string number
console.log(total.toFixed(5));


const numb = 50/0;
console.log(numb);

const number = -50/0;
console.log(number);


var name = 'papon';
let numbr = Number(name);
console.log(numbr);  //Output : NuN{not a number}

var name = '240';
numbr = Number(name);
console.log(numbr);  //Converted the string into number

const a = isNaN(9);
console.log(a);  //The ouput will be "false" --> Beacuse this is a number.

console.log("So this is not a number :",isNaN('80'));

console.log("So this is not a number :",isNaN('Sanjida Mahfuj'));