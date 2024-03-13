class Person {

    constructor(name, age) {

        this.name = name;
        this.age = age;
    }


    sleep() {

        console.log(`Now sleeping ${this.name}`);
    }


    activity() {
        this.sleep();
    }

}


const kodom = new Person("Kodom-Ali", 40);
console.log(kodom);
kodom.sleep();



const badam = new Person("kacha-badam", 33);
badam.activity();
badam.sleep();
