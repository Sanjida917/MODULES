
function tenTimes(number) {

    const result = number * 10;
    return result;

    /**
     * After doing the 'return' we cannot use the return value again.
     * Because it's taks has been completed totally.
    */

    // console.log(result);--> It's not possible
}


function cutHalf(number) {

    const half = number / 2;
    return half;
}


tenTimes(5);  //but this way,the retured value is not uses or completely wasted.

//for store the retured value we have to call the function/or put the fuction call within a new variable.
const store = tenTimes(5);
console.log("Ten times of the number is : ", store);


//we can farther use the return values in anyways
const store2 = cutHalf(50);
const reSquare = store2 * store2;
console.log("Square Of the return value (",store2,") is : ", reSquare)