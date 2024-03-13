

//data access
const data = [{ id: 1, name: "Abul", address: "Kochu-Khet" }];

//This is the wrong way
console.log("Wrong-way :", data.id);

//The correct way to Data Access
console.log("Right-way :", data[0].id);


const products = {

    count: 5000,
    data: [

        { id: 8, name: "HP", price: 75000 },
        { id: 10, name: "MAc-Book-Pro", price: 300000 },
    ]
}


//second product of data need
console.log("Second Products Details :", products.data[1]);
//name of second product named data
console.log("Name of Second Product :", products.data[1].name);
console.log("Price of First Product :", products.data[0].price);


const user = {
    id: 301,
    name: "Sidratul Muntaha",

    address: {

        street: {

            first: '54/A, Sector-9',
            second: 'Road-12',
            third: 'House-14'
        },

        city: 'Dhaka',

    }

}

//have to access the "Sector"
console.log("Sector Is :", user.address.street.first);

//have to access the "Road-Number"
console.log("Road Number Is :", user.address.street.second);

//have to access the "House Number"
console.log("House Number Is :", user.address.street.third);



const user2 = {

    id: 5004,
    name: "Papon",
    address: {

        City: "Gazipur",
        Division: "Dhaka",
        Country: "Bangladesh"
    }
}

console.log("City Is :", user2.address.City);
console.log("Division Is :", user2.address.Division);
console.log("Country Is :", user2.address.Country);


//if there is any property named "Country" in address it will return the value of country 
//otherwise it will return "undefined"
console.log("Country Is :", user.address?.Country);
console.log("Country Is :", user2.address?.Country);
console.log("Road Number Is :", user.address.street?.second);
console.log("Road Number Is :",user2.address.street?.second);



