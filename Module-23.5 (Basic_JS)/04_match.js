



const products = [

    { id: 1, name: 'Iphone', price: 150000 },
    { id: 2, name: 'Xiaomi Phone', price: 15000 },
    { id: 3, name: 'Samsung phone', price: 30000 },
    { id: 4, name: 'Nokia phome', price: 9000 },
    { id: 5, name: 'Realme', price: 13000 },
    { id: 6, name: 'Oppo', price: 14000 },
    { id: 7, name: 'Vivo Phone', price: 35000 },
]


function matchProducts(products, search) {

    const match = [];
    for (const product of products) {

        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            match.push(product);
        }

    }

    return match;
}

console.log(matchProducts(products, 'phone'));