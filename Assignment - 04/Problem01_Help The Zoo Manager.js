

function calculateMoney(numbersOfTicket) {

    if (numbersOfTicket < 0) {
        return "Sorry ! You've given a Negative Value."
    }

    else {

        const totalIncome = 120 * numbersOfTicket;
        const fixedExpenses = 500 + (8 * 50);


        const totalEarn = totalIncome - fixedExpenses;
        return 'Your total earn is: ' + totalEarn + '/-'

    }
}

const ticketNumbers = 1055;
console.log(calculateMoney(ticketNumbers));
console.log(calculateMoney(-130));
