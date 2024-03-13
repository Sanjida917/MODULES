

function avgOdd(numbers) {

    let oddSum = 0;
    const oddArr = [];
    for (number of numbers) {

        if (number % 2 == 1) {

            oddSum += number;
            oddArr.push(number);

        }

    }

    const size = oddArr.length;
    const avgOddNum = oddSum / size;

    
    console.log("Odd Array :", oddArr);
    return avgOddNum;
    

}

const arrayNum = [1, 2, 5, 8, 3, 7];
const avgStoage = avgOdd(arrayNum);

console.log("Original Array :", arrayNum);
console.log("The Average Of Odd's Is :", avgStoage);