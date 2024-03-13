
const products = [

    { name: 'Shampoo', price: 300 },
    { name: 'Comb', price: 100 },
    { name: 'Shirt', price: 700 },
    { name: 'Pant', price: 1200 }
]



function getShoppingTotal(products) {

    let totalCost = 0;
    for (const product of products) {

        totalCost = totalCost + product.price;
    }

    return totalCost;
}

const total = getShoppingTotal(products);
console.log('Total Cost Is : ', total);
