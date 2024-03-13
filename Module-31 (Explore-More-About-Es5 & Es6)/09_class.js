
//array ofject
const products = [

    { id: 1, name: 'Lenovo', price: 45000 },
    { id: 2, name: 'Dell', price: 40000 },
    { id: 3, name: 'HP', price: 65000 },
    { id: 4, name: 'MAc', price: 180000 },

];

//every class has some properties, method
class Product {

    country = "Bangladesh";

    constructor(name) {
        this.name = name
    };

    speak(talk) {
        console.log(`Talking About ${talk}`)
    }

}

const cls = new Product("Hi World !");
console.log(cls);
cls.speak(": Sanjida");




class Teacher {

    constructor(name, subject) {
        this.name = name;
        this.subject = subject;

    }
    lecture() {
        console.log('Sir Is Teaching Math')
    }
}

const mySir = new Teacher("Mohsin", "Math");
console.log(mySir);


const favSir = new Teacher('Anjan', 'Physics');
console.log(favSir);