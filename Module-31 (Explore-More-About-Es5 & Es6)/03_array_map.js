
//without usig map method

const numbers = [3, 5, 8, 9, 12];
const doubled = [];

for (const num of numbers) {
    const double = num * 2;

    doubled.push(double);
}

console.log(doubled);


//usig map method
// map ==> The map method calls the callbackfn function one time for each element in the array.loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array.

// using map() - first process
const numbers2 = [2, 6, 7, 8, 9, 5, 10];

function doubleIt(num) {

    console.log("now num : ", num);

    return num * 2;
}

const result = numbers2.map(doubleIt);
console.log("Result Is :", result);


//second way/smaller to use map()

const double2 = n => n * 2;

const result2 = numbers2.map(double2);
console.log("Result Is :", result2);


//more effective and smallest way
const result3 = numbers2.map(num => num * 2);
console.log("Result Is :", result3);


const fiveBonus = numbers2.map(num => num + 5);
console.log(fiveBonus);


const halves = numbers2.map(nm => nm / 2);
console.log(halves);


//map method over the string values

const friends = ['Tom', 'John', 'Michel', 'Oliver'];
const lengths = friends.map(frnd => 'Name : '+ frnd +' Length : '+frnd.length);
console.log(lengths);