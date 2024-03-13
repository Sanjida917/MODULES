/**
 * Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

function longestStr(strName) {

    const splitStr = strName.split(" ");
    let longStr = splitStr[0];

    for (let i = 0; i < splitStr.length; i++) {

        if (splitStr[0].length < splitStr[i].length) {

            longStr = splitStr[i];

        }
    }

    return longStr;
}

const namess = "This is Sanjida mahfuj ";



console.log(longestStr(namess));