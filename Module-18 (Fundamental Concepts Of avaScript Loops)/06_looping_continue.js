
//continue  -->Skip rest of the code for this Iteration

for (let i = 0; i <= 20; i++) {

    if (i % 2 == 1) {
        continue;
    }

    console.log(i)
}

console.log("\n");


let n = 0;

while (n <= 20) {

    n++;

    if (n % 5 != 0) {

        continue;
    }

    console.log(n);

}