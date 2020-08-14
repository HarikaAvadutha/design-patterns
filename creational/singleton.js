/*
The Singleton Pattern limits the number of instances of a particular object to just one.
This single instance is called the singleton.
*/

let instance;

class Singleton {
  static createInstance() {
    if (!instance) {
      instance = new Singleton();
    }

    return instance;
  }
}

let instance1 = Singleton.createInstance();
let instance2 = Singleton.createInstance();

console.log('Are both instances are equal? =', instance1 === instance2);
// Output - Are both instances are equal? = true
