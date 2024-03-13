
//Object and its Properties

const person = {
    name: 'Mahfuj',
    age: 33,
    profession: 'Businessman',
    salary: 500000,
    married: true,

    'favourite places': ['Paris','Indonesia','maldives','Chimburaju']
}
console.log(person); //full object

//.notation(Dot notation)
console.log(person.married);

//We can store easily obect-properties in a variable
const income = person.salary;
console.log("Income Is :", income);


//Bracket Notation
console.log(person['name']);

const age = person.age;
console.log("Age Is :",age);


//We cannot always use "Dot Notation(. notation)" for printing an object-property.In Those cases we must have to uses "Bracket-Notation". Specislly which property does have "spaces","colons","hiphens".

//console.log(person.favourite places); 
//Error occurs here

console.log("His Favourite Places :",person['favourite places']);