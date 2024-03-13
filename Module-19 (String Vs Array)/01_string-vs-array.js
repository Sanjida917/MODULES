
//The types of method for declaring a string value

const country = 'Bangladesh';
const division = "Dhaka";
const district = `Dhaka`;
const policeStation = new String('Adabor');


console.log(policeStation);
console.log(typeof policeStation);


//We can find the length bot of an array and a string.
//We can also find out the index values both of them

const numbers = [23, 54, 78, 98, 12, 40, 66];
console.log(numbers.length);
console.log(numbers[6]);


const capital = 'D h a k a'; 
//String value counts the white-spaces whereas arrays doesn't.
console.log(capital.length);
console.log(capital[0],capital[6]);

//String is immutable- We cannot change the  string elements.
//Whereas Array is Mutable and we canchange the value of an array

numbers[0] = 100;
console.log(numbers);

capital[1]="p";
console.log(capital);