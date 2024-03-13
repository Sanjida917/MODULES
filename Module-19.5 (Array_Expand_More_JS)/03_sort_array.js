

//Sorting an array
const flowers = ['Dahlia', 'Genea', 'Orchid', 'Rose', 'Tube-Rose', 'Deffodill', 'China-Rose', 'Bely', 'Hasna-Hena', 'Mary-Gold', 'Tulip', 'Cactus'];
const sortflowers = flowers.sort();

console.log(sortflowers);

//sorting in Ascending order : smaller to larger
const numbers = [10, 2, 72, 8, 3, 122, 0, 92, 5, 6];
const numAsc = numbers.sort();
console.log(numAsc);
//So this is not proper way for numbers sorting. it's sort by counting of charecter like 1,11,13,15,2,25,27,4,44,5,67,68,77,8,9,99.


// for this type of problem we canwrite our code like this

//for ascending order
const numAscending = [...numbers].sort(function (a, b) { return a - b });
console.log(numAscending);
//for descending order
const numDescending = [...numbers].sort(function (a, b) { return b - a });
console.log(numDescending);

// [...numbers] --> for copying the array