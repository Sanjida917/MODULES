class Vehicle {

    constructor(name, price) {
        this.name = name;
        this.price = price
    }


    move() {
        console.log("Can Move Also");
    }
}

class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice) {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }


}

class Truck extends Vehicle {

    constructor(name, price, load) {
        super(name, price);
        this.load = load;
    }
}


const truck = new Truck("Mayer Dua", 12000, "Very Good");

console.log(truck, "\n", truck.name,"\n", truck.price, "\n", truck.load);
;
truck.move();
