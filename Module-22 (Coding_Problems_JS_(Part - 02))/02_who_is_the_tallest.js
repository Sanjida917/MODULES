
const heights = [44, 31, 33, 55, 61, 15, 72, 88, 145, 62, 65, 88, 91, 23];

function getMax(numbers) {

    let containerLarge = numbers[0];

    for (const num of numbers) {
        if (num > containerLarge) {

            containerLarge = num;
        }
    }

    return containerLarge;
}

const max = getMax(heights);
console.log("Max Height Is", max);


//the smallest height 




function getMin(numbers) {

    let containerMin = numbers[0];

    for (const num of numbers) {
        if (num < containerMin) {

            containerMin = num;
        }
    }

    return containerMin;
}

const min = getMin(heights);
console.log("Smallest Height Is", min);