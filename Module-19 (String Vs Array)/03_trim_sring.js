


const subject = '  chemistry';
const book = 'chemistry ';

if (subject === book) {

    console.log("No Whitrspace in them...!!");
}

else {

    console.log("Whitespace present..!");

}

const school = ' A K M C C ';
console.log(school); //mixed case

//Removes the leading/starting white space and line terminator characters from a string.
console.log(school.trimStart());

//Removes the trailing/ending white space and line terminator characters from a string.
console.log(school.trimEnd());


//Removes the leading and trailing(Starting And Ending Both But Not In The Middle) white space and line terminator characters from a string.
console.log(school.trim());



if (subject.trim() === book.trim()) {

    console.log("No Whitrspace in them...!!");
}

else {

    console.log("Whitespace present..!");

}