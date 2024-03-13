

//For defining a bottle
//Primitive  --> Basic/Primary data type(Can't be smaller)

const bottleDefine = ['White', 'glass', 490, 700];

const bottleColor = 'white';
const bottlePrice = 700;
const bottleDrink = 'water';
const bottleMaterial = 'glass';
const bottleSize = '490';


//object conccept
// *** Objects in JavaScript represent data in the form of key-value pairs. Each key-value pair is called property and each pair is separated by a colon. Objects are popularly created using curly braces that enclose the key-value pairs. After an object has been created, more properties can be added and existing properties can be updated or deleted. While creating new objects, properties from other objects can be inherited too. Properties holding function values are called methods. Such methods might have "this" keyword that refers to the object that invoked the method.



//Object- Type = Non-Primitive ***
//Primitive data structure is the data structure that allows you to store only single data type values. Non-Primitive data structure is a data structure that allows you to store multiple data type values. integer, boolean, character, float, etc.

const bottle = {

    brand: 'aple',
    price: 700,
    color: 'white',
    material: 'glass',
    size: 490,
    isClean: false
}

const subject = {

    name: 'Biology',
    teacher: 'Sanjida',
    exam: '30 Feb',
    chapters: ['First', 'Second', 'Third', 'Forth', 'Fifth'],

    exams: {

        name: 'final-exam',
        place: 'College',
        marks: 100

    },

}