//Divisible by 5

for (let i = 1; i <= 30; i++) {

    if (i % 5 == 0) {
        console.log("Divisibe by 5 :", i);
    }
}


//Divisible by 3 or 5

for (let i = 1; i <= 30; i++) {

    if (i % 5 == 0 || i % 3 == 0) {
        console.log("Divisibe by 3 Or  5 :", i);
    }
}

console.log('\n')
//Divisible by 3 and 5

for (let i = 1; i <= 50; i++) {

    if (i % 5 == 0 && i % 3 == 0) {
        console.log("Divisibe by 3 and  5 :", i);
    }
}


//Print the sum of divisible by 3 from 1 to 20

console.log('\n')
let total =0;
for (let i = 1; i <= 20; i++) {

    if (i % 3 == 0) {

        total=total+i;
        console.log("Divisibe by 3 :", i);
    }
}


console.log("Total :",total)