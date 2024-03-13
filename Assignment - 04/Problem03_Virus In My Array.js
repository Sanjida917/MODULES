

function deleteInvalids(array) {

    if (Array.isArray(array) === false) {
        return 'Invalid! please enter an array.'
    }

    const filterArr = [];

    for (let i = 0; i < array.length; i++) {

        if (typeof array[i] === 'number' && !isNaN(array[i])) {

            filterArr.push(array[i]);
        }
    }

    return filterArr;


}

const inputArr = [12, NaN, "Sanjida", -23, 33, true, undefined, false, null, 99, 33, 55, "perfect"]
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids(["1", { num: 2 }, NaN, true, false, undefined, null]));