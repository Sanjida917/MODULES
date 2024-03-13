
function cheapestPricedPhone(phnPrice) {

    let lowPrice = phnPrice[0];
    for (const price of phnPrice) {

        if (lowPrice > price) {

            lowPrice = price;
        }
    }

    return lowPrice;
}

const pricePhone = [20000, 30000, 12500, 45500, 150000];

console.log("Cheapest Price Of phone Is : ", cheapestPricedPhone(pricePhone));