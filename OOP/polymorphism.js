console.log("Hello OOP!")

//Polymorphism

class Animal {
    makeSound() {
        return `The animal makes a noise`;
    }
}

class Dog extends Animal {
    makeSound() {
        return super.makeSound() + `, the dog barks`;
    }
}

class Cat extends Animal {
    makeSound() {
        return super.makeSound() + `, the cat meows`;
    }
}

const dog = new Dog();
const cat = new Cat();

console.log(dog.makeSound());
