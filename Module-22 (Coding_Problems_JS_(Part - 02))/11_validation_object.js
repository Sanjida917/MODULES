
function getPrice(product) {

    if (typeof product !== 'object') {

        return 'Please provide an Object !'
    }

    const price = product.price;
    return price;
}

const objct = {

    name: ' mobile',
    details: {

        price: 40000,
        color: 'blue'
    }
}

const price = getPrice(objct.details);
//also can use this : getPrice({name : 'Product, price : 3000});
console.log(price);