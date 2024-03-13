const today = new Date();
console.log(today);

//Date(year-month-day)
const date = new Date('2030-10-19');
console.log(date.getMonth()); //index of month -->9
console.log(date.getDay());

const specificday = new Date(2090, 2, 29); //Here month(2) is an index 
console.log(specificday);

specificday.setMonth(10); //month index - 10
console.log(specificday.toLocaleString());  //USA Style(Default)
console.log(specificday.toLocaleString('en-GB'));  //Grate-Briten Date Style


//Also ca convert in second and many many more things

