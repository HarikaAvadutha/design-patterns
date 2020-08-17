class Person {
    constructor(name, city){
        this.name = name
        this.city = city
    }

    intro(){
        console.log("Hello my name is ",this.name," and I am from ",this.city)
    }
}

class ArtistMixin {
    constructor() { }

    paintsBeautifully() {
        console.log("Awesome painting by ", this.name)
    }

    danceGracefully(){
        console.log("Super Dance by ", this.name)
    }
}

function extend(destinationClass, sourceClass, methodsList){
    if( methodsList && methodsList.length > 0){
        for(let i=0;i<methodsList.length; i++){
        destinationClass.prototype[methodsList[i]] = sourceClass.prototype[methodsList[i]]
        }
    }
    else {
        for(let methodName in sourceClass.prototype){
            if( !destinationClass.prototype[methodName]){
                destinationClass.prototype[methodName] = methodName
            }
        }
    }
}

extend(Person, ArtistMixin, ["paintsBeautifully"] )

let person = new Person("Harry", "Hyderabad")
person.intro() // Output - Hello my name is  Harry  and I am from  Hyderabad
person.paintsBeautifully() // Output - Awesome painting by  Harry