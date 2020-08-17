/*
The Adapter pattern translates one interface (an object's properties and methods) to another.

One scenario where Adapters are commonly used is when new components need to be integrated and work together with existing components in the application.
*/

// old interface
class Shipping {
    constructor() {
        this.request = function (zipStart, zipEnd, weight) {
            // ...
            return "$49.75";
        };
    }
}

// new interface
class AdvancedShipping {
    constructor() {
        this.login = function (credentials) { };
        this.setStart = function (start) { };
        this.setDestination = function (destination) { };
        this.calculate = function (weight) { return "$39.50"; };
    }
}


// adapter interface
class ShippingAdapter {
    constructor(credentials){
        let shipping = new AdvancedShipping()
        shipping.login(credentials)
        return {
            request: function(zipStart, zipEnd, weight) {
                shipping.setStart(zipStart);
                shipping.setDestination(zipEnd);
                return shipping.calculate(weight);
            }
        };
    }
}

let shipping = new Shipping();
let credentials = {token: "30a8-6ee1"};
let adapter = new ShippingAdapter(credentials);
 
// original shipping object and interface
 
let cost = shipping.request("78701", "10010", "2 lbs");
console.log("Old cost: " + cost); // Output - Old cost: $49.75

// new shipping object with adapted interface
 
cost = adapter.request("78701", "10010", "2 lbs");
 
console.log("New cost: " + cost); // Output - New cost: $39.50
