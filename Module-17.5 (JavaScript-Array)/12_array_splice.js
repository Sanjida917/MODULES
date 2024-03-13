const num = [1, 3, 5, 7, 10];
const vegitable = ['potato', 'tomato', 'onion', 'garlic', 'ginger', 'cucumber', 'carrot', 'beans', 'coli-flower'];


//Array-Splice -->  Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//here,start splicig from index 1 and cut 5 elements from 1.
console.log(vegitable.splice(1,5));

// The rest values after splicing the elements from the array
console.log(vegitable);


//Here spliced two elements from the last of the array.
console.log(vegitable.splice(2));
console.log(vegitable);