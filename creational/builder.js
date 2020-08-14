// Separates construction of an object from the representation

class Vehicle {
  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }

  printDetails() {
    console.log('********Vehicle Details*********');
    console.log('Vehicle Type = ', this.vehicleType);
    console.log('Model = ', this.model);
    console.log('Make = ', this.make);
    console.log('Color = ', this.color);
  }
}

class Car extends Vehicle {
  constructor(details) {
    super('car');
  }
}

class TwoWheeler extends Vehicle {
  constructor(details) {
    super('twowheeler');
  }
}

let vehicleBuilder = (function () {
  vehicleInstance = null;

  return {
    create: function (vehicleType) {
      switch (vehicleType) {
        case 'car':
          vehicleInstance = new Car();
          break;
        case 'twowheeler':
          vehicleInstance = new TwoWheeler();
          break;
      }

      return this;
    },

    make: function (make) {
      vehicleInstance.make = make;
      return this;
    },

    model: function (model) {
      vehicleInstance.model = model;
      return this;
    },

    color: function (color) {
      vehicleInstance.color = color;
      return this;
    },

    build: function () {
      if (!vehicleInstance.make || !vehicleInstance.model) {
        throw Error('Please Give make and model values');
      }
      return vehicleInstance;
    },
  };
})();

let car = vehicleBuilder.create('car').make('BMW').model('5 series').build();
car.printDetails();
/* Output:
********Vehicle Details*********
Vehicle Type =  car
Model =  5 series
Make =  BMW
Color =  undefined
*/

let bike = vehicleBuilder
  .create('twowheeler')
  .make('Bajaj')
  .model('Zoom')
  .color('black')
  .build();
bike.printDetails();
/* Output:
********Vehicle Details*********
Vehicle Type =  twowheeler
Model =  Zoom
Make =  Bajaj
Color =  black
*/
