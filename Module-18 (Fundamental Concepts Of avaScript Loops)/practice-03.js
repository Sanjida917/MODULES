
//Sum Of Odd Numbers :
let num2 = 81;

let sumOfOdd = 0;

while (num2 <= 131) {


    
    if (num2 % 2 == 1) {
       
        //Or num2 % 2 != 0

        console.log("Odd Number : ", num2);
        sumOfOdd = sumOfOdd + num2;
    }

    num2++;
}

console.log("Sumof odd Numbers :", sumOfOdd);




//Sum Of Even Numbers :
let num = 206;

let sumOfEven = 0;

while (num <= 311) {


    if (num % 2 === 0) {

        console.log("Even Number : ", num);
        sumOfEven = sumOfEven + num;
    }

    num++;
}

console.log("Sum of Even Numbers :", sumOfEven);