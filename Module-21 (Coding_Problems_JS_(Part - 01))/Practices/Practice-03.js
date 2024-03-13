/**
 * Write a function to count the number of vowels in a string.
 */

function countVowels(passString) {


    let count = 0;
    for (const letter of passString) {

        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' || letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U') {

            count++;

        }
    }

    return count;

}

const myName = "Sanjida Mahfuj";

console.log("The Number Of Vowels Are :", countVowels(myName));