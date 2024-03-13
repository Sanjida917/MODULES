const products = [

    { id: 1, name: 'Lenovo', price: 45000 },
    { id: 2, name: 'Dell', price: 40000 },
    { id: 3, name: 'HP', price: 65000 },
    { id: 4, name: 'MAc', price: 180000 },

];


//map
const ProductNames = products.map(pr => pr.name);
console.log(ProductNames);


const ProductPrices = products.map(pr => pr.price);
console.log(ProductPrices);


//forEach
const ProductId = products.forEach(pr => console.log(pr.id));
console.log(ProductId);

//filter
const upperPrice = products.filter(p => p.price > 50000);
console.log(upperPrice);


//find
const affordable = products.find(p => p.price < 50000);
console.log(affordable);


//reduce
const total = products.reduce((acum, current) => acum + current.price, 0);
console.log("Total Price Is :", total);