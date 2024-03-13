// var --> no reason to use var
// let -->allowit to re-assign
// const --> do not assign to re-assign


/*************
 * 
 * var, and let -> "Mutable"
 * Const and let -> "Block-Scoped"
 * 
*/




const money = 500;
// money = money + 100;

console.log(money);  //error will be shown

const newMoney = money + 100;
console.log(newMoney);


let count = 0;
count = count + 10;
console.log(count);


const numbrs = [23, 4, 6, 54, 23];


//in the term of array and also fr object, 
//we cant not re-assign the const array/object again 
//but we can modify the array easily

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[9] = 10;
console.log(numbers);

numbers.push(11, 12, 13, 14, 15);
console.log(numbers);


const student = {

    name: 'Sanjida Papon',
    class: 12,
    study: "BSc"

}

// student = {name : "Sanjida Papon"};  -->cant change

student.name = "Sanjida Mahfuj";
console.log(student);


//loop
let sum = 0;
for (let i = 0; i < - 10; i++) {

    const num = num + 1; //this is possible, because every time after loop complete the previous valuse   has vanished and every time set a new value which is constant only wihin the box.

    sum = sum + i;
    console.log(sum);
}