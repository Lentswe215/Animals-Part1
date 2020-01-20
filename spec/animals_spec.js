let {Dog, Cat, Home} = require('../src/animals');

let cat = new Cat("Stormy")
let dog = new Dog("Rax")

describe("Animal", () =>{
    it("should return Rax eats",()=>{

        expect(dog.eat()).toBe("Rax eats")
    })
    it("should return Rax barks",()=>{

        expect(dog.sound()).toBe("Dog barks")
    })
    it("should return Rax eats",()=>{

        expect(cat.eat()).toBe("Stormy eats")
    })
    it("should return Rax eats",()=>{

        expect(cat.sound()).toBe("Cat meows")
    })
})
