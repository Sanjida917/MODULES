

function cheapestPricedPhone(phnPrice) {

    let lowPrice = phnPrice[0];
    for (const prices of phnPrice) {

        if (lowPrice.price > prices.price) {

            lowPrice = prices;
        }
    }

    return lowPrice;
}


const detailsOfMobies = [
    { name: 'samsung', color: "Black", price: 50000 },
    { name: 'Iphone', color: "Titanium", price: 150000 },
    { name: "Xiaomi", color: 'Dark-gray', price: 29000 },
    { name: "Realmi", color: 'Black', price: 17500 }

]


console.log(cheapestPricedPhone(detailsOfMobies));