/*
SINGLE RESPONSIBILITY PRINCIPLE:
A class should have one and only one reason to change, meaning that a class should only have one job.
*/

class SuperHero {
    constructor(name){ }
    getHeroName() { }
    saveHeros(heros) { }
}
// The above doesn't implement SRP

//In order to meet the SRP, we create another class that will handle the responsibility of database management.
class SuperHero {
    constructor(name){ }
    getHeroName() { }
}

class SuperHeroDB {
    getHeros(hero) {}
    saveHeros(heros) { }
}


/*
OPEN CLOSED PRINCIPLE:
Objects or entities should be open for extension, but closed for modification.
*/

let iceCreamFlavors = ['chocolate', 'vanilla'];
let iceCreamMaker = {
  makeIceCream(flavor) {
    if (iceCreamFlavors.indexOf(flavor) > -1) {
      console.log('You now have ice cream.');
    } else {
      console.log('No ice cream for you.');
    }
  },
  addFlavor(flavor) { // *
    iceCreamFlavors.push(flavor);
  },
};
export default iceCreamMaker;

// In the above code without addFlavor(*) method it we can't add new flavor and we need to modify the iceCreamFlavors to add new flavor, which fails open closed principle.
// So instead of that if we add addFlavor method then we can import iceCreameMaker any where and can use it.


/*
LISKOV SUBSTITUTION PRINCIPLE:
A sub-class must be substitutable for its super-class.
It states that every subclass/derived class should act as a substitute to their base/parent class.
*/

class SuperHero {
    constructor(name) { }
    getWeapons() { }
}

class Thor extends SuperHero {
    getWeapons() {          
        return 'storm breaker';
    }
}

function getWeapons(superheros) {
    for (let i = 0 ; i <= superheros.length; i++) {
        console.log(superheros[i].getWeapons())
    }
}

getWeapons(superheros);


/*
INTERFACE SEGREGATION PRINCIPLE:
A Client should not be forced to depend upon interfaces and methods that they do not use.
*/


/*
DEPENDENCY INVERSION PRINCIPLE:
Entities must depend on abstractions not on concretions. 
It states that the high level module must not depend on the low level module, but they should depend on abstractions.
*/