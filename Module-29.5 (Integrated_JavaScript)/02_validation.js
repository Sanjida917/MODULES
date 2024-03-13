const number = 23;

if (typeof number === 'number') {

    console.log("Value is a number")
}

else {
    console.log("Value is not a number")
}


const numbers = [2, 5, 7, 9, 12, 45, 67];

const names = { name: "Sanida", job: "Web Developer" };

console.log(typeof numbers); //result will be "object"
console.log(typeof names);
console.log(Array.isArray(numbers));
console.log(Array.isArray(number));
console.log(Array.isArray(names));