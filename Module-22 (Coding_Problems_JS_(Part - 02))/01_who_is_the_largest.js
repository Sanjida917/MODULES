

function maxOfThree(value1, value2, value3) {

    if (value1 > value2 && value1 > value3) {
        console.log("Value 1 is bigger");
    }

    else if (value2 > value1 && value2 > value3) {

        console.log("Value 2 is Bigger")

    }
    else {

        console.log("Value 3 is Bigger")

    }
}

const num1 = 100;
const num2 = 200;
const num3 = 40;


maxOfThree(num1, num2, num3);


function maxThree(num1, num2, num3) {

    const storeMax = Math.max(num1, num2, num3);


    if (storeMax == num1) {
        console.log("First One (", storeMax, ") Is Bigger .!")
    }

    else if (storeMax == num2) {

        console.log("Second One (", storeMax, ") Is Bigger .!")
    }

    else {

        console.log("Final One (", storeMax, ") Is Bigger .!");
    }
}

maxThree(num1, num2, num3);
