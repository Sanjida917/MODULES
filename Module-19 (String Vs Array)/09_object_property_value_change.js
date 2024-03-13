

const person = {
    name: 'Mahfuj',
    age: 33,
    profession: 'Businessman',
    salary: 500000,
    married: true,

    'favourite places': ['Paris','Indonesia','maldives','Chimburaju']
}

console.log(person); 

//We can chnage values from object properties.


//Can change by .notation
person.salary = 800000;
console.log(person.salary); 

//also can change by bracket notation
person['age'] = 34;
person['favourite places'] = ['madives','bali','pataya'];
console.log(person); 


//can also change by new variable
const profName = 'profession';
person[profName] = 'Industrialist';
console.log(person.profession)