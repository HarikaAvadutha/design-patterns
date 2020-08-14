/*
A Factory Method creates new objects as instructed
The key objective of the Factory Method is extensibility.
Factory Methods are frequently used in applications that manage, maintain, or manipulate collections of objects that are different but at the same time have many characteristics in common.
*/

class Vehicle {
  constructor(vehicleType, make, model) {
    this.make = make;
    this.model = model;
    this.vehicleType = vehicleType;
  }

  printDetails() {
    console.log('********Details start*********');
    console.log(
      'Vehicle Type = ',
      this.vehicleType,
      ', Model = ',
      this.model,
      ', Make = ',
      this.make
    );
  }
}

class Car extends Vehicle {
  constructor(details) {
    super('car', details.make, details.model);
    this.carType = details.carType;
  }

  printDetails() {
    super.printDetails();
    console.log('Car type = ', this.carType);
    console.log('********Details end*********');
  }
}

class Bus extends Vehicle {
  constructor(details) {
    super('bus', details.make, details.model);
    this.busType = details.busType;
  }

  printDetails() {
    super.printDetails();
    console.log('Bus type = ', this.busType);
    console.log('********Details end*********');
  }
}

class CustomVehicleFactory {
  constructor(vehicleType) {
    if (vehicleType == 'car') this.vehicleCtor = Car;
    else if (vehicleType == 'bus') this.vehicleCtor = Bus;
  }

  createVehcile(details) {
    return new this.vehicleCtor(details);
  }
}

//Create car factory
let carFactory = new CustomVehicleFactory('car');
console.log('Car Factory = ', carFactory);

let carDetails = {
  make: 'BMW',
  model: '5 series',
  carType: 'convertible',
};

let bmwCar = carFactory.createVehcile(carDetails);
console.log('Created car = ', bmwCar);
console.log('BMW car is instance of Car ? ', bmwCar instanceof Car); //true

bmwCar.printDetails();
/* Output
********Details start*********
Vehicle Type =  car , Model =  5 series , Make =  BMW
Car type =  convertible
********Details end*********
*/

// Create bus factory
let busFactory = new CustomVehicleFactory('bus');
console.log('Bus Factory = ', busFactory);

let busDetails = {
  make: 'Blue bird',
  model: 'Conventional',
  busType: 'Minibus',
};

let miniBus = busFactory.createVehcile(busDetails);
console.log('Created bus = ', miniBus);
console.log('Mini Bus is instance of Bus ? ', miniBus instanceof Bus); // true
miniBus.printDetails();
/* Output
********Details start*********
Vehicle Type =  bus , Model =  Conventional , Make =  Blue bird
Bus type =  Minibus
********Details end*********
*/
