"use strict"

class Animal {
    constructor(name){
        this.name = name;
    }

    sound(){
        return "Sound ..."
    }

    eat(){
    return  `${this.name} eats`
    }
}

class Dog extends Animal {

    sound(){
        return "Dog barks"
    }

}
let dog = new Dog("Rax")

console.log(dog.eat())
console.log(dog.sound())
console.log("-------------------------------------------------------------------------------------")


class Cat extends Animal {

    sound(){
        return "Cat meows"
    }
}
let cat = new Dog("Stormy")

console.log(cat.eat())
console.log(cat.sound())
console.log("-------------------------------------------------------------------------------------")

class Home { 
    constructor(){
        this.animalArray = []
    }

        adoptPet(pet){
            
            if(this.animalArray.includes(pet)){
                throw Error("This pet is already adopted")
            }
            this.animalArray.push(pet)
        }

makeAllSounds(){
    for(let i = 0; i < this.animalArray.length; i++){
    console.log(this.animalArray[i].sound())

}
    }

}
var home = new Home();
var dog1 = new Dog();
var dog2 = new Dog();
var cat1 = new Cat();


home.adoptPet(dog1)
home.makeAllSounds()
console.log("-------------------------------------------------------------------------------------")

home.adoptPet(cat1);
home.makeAllSounds();
console.log("-------------------------------------------------------------------------------------")

home.adoptPet(dog2)
home.makeAllSounds()
console.log("-------------------------------------------------------------------------------------")

home.adoptPet(dog2)
home.makeAllSounds()
console.log("-------------------------------------------------------------------------------------")


