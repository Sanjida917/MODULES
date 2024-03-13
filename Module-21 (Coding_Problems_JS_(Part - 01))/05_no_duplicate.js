

/**
 * An Array[] can have some duplicate elements 
 */

function noDuplicate(array) {


    let uniques = [];
    let duplicates = [];

    for (const element of array) {

        if (uniques.includes(element) === false) {

            uniques.push(element);
        }

        else {

            duplicates.push(element);

        }
    }

    return '\nUnique values Are : '+ uniques + "\nDuplicate values Are : "+ duplicates;

}


const numbers = [2, 3, 7, 55, 2, 10, 23, 12, 56, 56, 10, 7];
console.log(noDuplicate(numbers));
