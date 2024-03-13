

//Returns a string that contains the concatenation(add) of two or more strings.

const first = "Sanjida";
const last = "Mahfuj";

//Add fullname

// const fullName = first + ' ' + last ;
// console.log(fullName);


const fullName = first.concat(' ',last);
console.log(fullName);

//Another Way
const fullName2 = first.concat(' ').concat(last);
console.log(fullName2);


//include
//Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

console.log(last.includes('M'));

