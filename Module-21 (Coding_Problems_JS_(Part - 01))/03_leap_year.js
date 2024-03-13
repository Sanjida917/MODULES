/**
 * Year will be a leap year if the year is devisible by 4(Very simple logic)
 * --> Those years are devisible by 4 but not divisible but 100,areleap Year.
 * --> Or those years are Devisible by 400, Is a leap year.
 */

function isLeatYear(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Yee..! It's a Leap Year..!";
    }

    return "It's not a Leap Year !!";
}

console.log(isLeatYear(2000))