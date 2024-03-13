
const products = [

    { name: 'Shampoo', price: 300, quantity: 3 },
    { name: 'Comb', price: 100, quantity: 8 },
    { name: 'Shirt', price: 700, quantity: 2 },
    { name: 'Pant', price: 1200, quantity: 1 }
]


function getShoppingTotal(products) {

    let totalCost = 0;
    for (const product of products) {

        const thisProductCost = product.price*product.quantity

        totalCost = totalCost + thisProductCost;
    }

    return totalCost;
}

const total = getShoppingTotal(products);
console.log('Total Cost Is : ', total);
