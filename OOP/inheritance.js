// Inheritance
console.log("Hello OOP!");

class Animal {
    constructor(name) {
        this.name = name;

    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`Woof woof!`);
    }
}

class Possum extends Animal {
    hiss() {
        console.log(`Hiss hiss!`);
    }
}

const myDog = new Dog('Buddy');
myDog.bark();
myDog.eat();

const myPossum = new Possum(`Gertrude`);
myPossum.eat();
myPossum.hiss();