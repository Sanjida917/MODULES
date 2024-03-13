
//Multiplication Table

let count = 1;
let mlNum = 5;

while (count <= 10) {

    console.log(mlNum, "X", count, "=", (mlNum * count));

    count++;
}
console.log("\n");



//Another way

let start = 1;
let table = 5;

while (start <= 10) {

    console.log("5 X", start, "=", table);

    start++;
    table += 5;
}