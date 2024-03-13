
function monthlySavings(earns, livingCost) {

    if (Array.isArray(earns) === false && typeof livingCost !== 'number') {

        return 'invalid input';
    }

    let Earnings = 0;
    let totalTax = 0;
    let actualEarn = 0;

    for (earnNum of earns) {

        Earnings = Earnings + earnNum;

        if (earnNum >= 3000) {

            totalTax = totalTax + ((earnNum * 20) / 100);
        }
    }

    actualEarn = (Earnings - totalTax) - livingCost;

    if (actualEarn > 0) {
        return actualEarn;
    }

    else {
        return "earn more";
    }
}

console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));
