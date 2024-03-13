const fruits = ['Banana', 'Guava', 'Mango', 'Lichi', 'jack-Fruit', 'Berry', 'palm', 'Cherry', 'Strawberry'];


//Array include - Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(fruits.includes('Mango'));


//We canusewidelyin if-else statement :

if (fruits.includes('Cherry')) {

    console.log("My favourite fruit has added ..!!")
}

else {

    console.log("My favourite fruit does not added !")
}





const flowers = ['Rose', 'Tulip', 'Tube-Rose', 'Genia', 'Orchid'];

if (flowers.includes('Dahlia')) {
    console.log("Already Added ..!!")
}

else {

    flowers.push('Dahlia');
    console.log(flowers);
    console.log("Added Now ..!!");
}
