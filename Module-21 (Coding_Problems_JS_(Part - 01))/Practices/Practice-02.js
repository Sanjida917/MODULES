/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0

*/


function arrayOfNumbers(array, find) {

    //let a=[find];  -->also  can pass through anew variable

    let count = 0;
    for (const numbs of array) {

        if ([find].includes(numbs) === true) {

            count++;
        }
    }

    return count;
}

const arrayNum = [12, 22, 10, 5, 6, 34, 10, 6, 81, 33, 5, 81, 10, 20, 10];

console.log("The Time :", arrayOfNumbers(arrayNum, 10));