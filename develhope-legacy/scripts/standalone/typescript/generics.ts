// Garage
class Garage<T> {
    items: T[];

    constructor() {
        this.items = [];
    }

    addItem(item: T) {
        this.items.push(item)
    }

    printItems() {
        this.items.forEach((item: T, index: number) => {
            console.log("The item n " + index + " is an istance of " + item.constructor.name)
        })
    }
}

/** ---------------------------------- */

interface Vehicle {
    manufacturer: string;
    model: string;
}

type PortsNumber = 3 | 5

class Car implements Vehicle {
    manufacturer: string;
    model: string;
    portsNumber: PortsNumber;

    constructor(manufacturer: string, model: string, portsNumber: PortsNumber) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.portsNumber = portsNumber;
    }
}

class Moto implements Vehicle {
    manufacturer: string;
    model: string;

    constructor(manufacturer: string, model: string) {
        this.manufacturer = manufacturer;
        this.model = model;
    }
}

enum Carrier {
    BRT, Poste, DHL
}

class Box {
    address: string;
    carrier: Carrier;

    constructor(address: string, carrier: Carrier) {
        this.address = address;
        this.carrier = carrier;
    }
}

/** ---------------------------------- */

let vehicleGarage = new Garage<Vehicle>()
vehicleGarage.addItem(new Car("Renault", "Clio", 5))
vehicleGarage.addItem(new Car("Fiat", "Punto", 3))
vehicleGarage.addItem(new Car("BMW", "Serie 1", 3))
vehicleGarage.addItem(new Moto("BMW", "Serie 1"))

vehicleGarage.printItems()

console.log("----------------------------------")

let boxesGarage = new Garage<Box>()
boxesGarage.addItem(new Box("Via Verdi 10", Carrier.BRT))
boxesGarage.addItem(new Box("Via Giovanni 461", Carrier.Poste))

boxesGarage.printItems()


