console.log("Hello OOP!");

//encapsulation 
class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        throw new Error ('Method not implemented');
    }
}
//inheritance
class Rectangle extends Shape {
    displayFormula() {
        console.log("Width x Height = Area of Rectangle")
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const shape1 = new Rectangle(4,5);
console.log(shape1.displayFormula());
console.log(shape1.calculateArea());
