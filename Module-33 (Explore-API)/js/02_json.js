

const user = { id: 1, name: "Gorib", job: "Actor" };

//JAVAScript Object Notation (JSON)
//JSON.stringify  --> Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

/** OUTPUT :
 * { id: 1, name: 'Gorib', job: 'Actor' }  --> JS
 * {"id":1,"name":"Gorib","job":"Actor"}   --> JSON
 */


const shop = {

    owner: "Alia",

    address: {
        street: "Kochukhet vuter goli",
        city: "Ranbir",
        country: "Bangladesh"
    },

    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}


//Output : Expandable, type : Object
console.log(shop, "\nType Of Shop Is :", typeof shop);

const shopJson = JSON.stringify(shop);

//Output : Not Expandable, type : String
console.log(shopJson, "\nType Of Shop JSON Is :", typeof shopJson);


//we can also convert the JSON Stringify to its original form
const shopOriginal = JSON.parse(shopJson);

//Output : Expandable, type : Object
console.log("Converted Origial Form Is :", shopOriginal);