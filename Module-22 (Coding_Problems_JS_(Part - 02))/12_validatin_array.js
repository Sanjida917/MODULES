
function getSecond(numbers) {

    /** 
     *  console.log(typeof numbers);
     *  The output will be "Object". Because in JavaScript array is anotherkind of object.
    */

    if (Array.isArray(numbers) !== true) {
        return 'Please provide an array !'
    }

    const number = numbers[1];
    return number;
}

const arr = [2, 4, 5, 6];

console.log(getSecond(arr));
//also can use this --> console.log(getSecond([2, 4, 5, 6]));