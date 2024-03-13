const Person = {

    name: "John",
    job: 'Engineer',
    3: 'Third',
    'work-station': "New-York"
}


console.log(Person.name);
console.log(Person['name']);

const nameHolder = Person.name;
console.log(nameHolder);


const nameHolder2 = 'name';
console.log(Person[nameHolder2]);


// console.log(Person.3);  --> Error
console.log(Person['3']);

// console.log(Person.work-station);   -->Error
console.log(Person["work-station"]);