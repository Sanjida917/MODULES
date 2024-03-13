
// forEach method - Performs the specified action for each element in an array.
// But it doesn't return the result.forEach calls the callbackfn function one time for each element in the array.

const numbrs = [2, 5, 8, 12, 45, 66];
const result = numbrs.forEach(num => console.log(num));
console.log(result);


const result2 = numbrs.forEach(n => n * 2);
console.log(result2);


const result3 = numbrs.forEach(n => console.log(n * 2));
