

// const : value will not change
// let : values can be changed
// var : We should not use it

// const numbers = [10, 20, 30, 0, 50];
// console.log(numbers);

// for(i=0; i<=numbers.length; i++){
//     console.log(numbers[i]);
// }

// console.log(i);

/**
 * The "for-of" loop specially is very useful for Iterate an array.
 */

const fruits = ['Banana', 'Water-melo', 'Apple', 'Orange', 'Pine-Apple'];

for (const fruit of fruits) {
    console.log(fruit);
}

