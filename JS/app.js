//task 1
let squared = (num) => num * num;
console.log(squared(4));

//task 2
const person = {
    firstName: 'Susan',
    lastName: 'Brown',
    age: 33,
};

person.introduce = function () {
    console.log(`You are ${this.firstName} ${this.lastName}. You are ${this.age}. years old`);
};
person.introduce();

//task 3
console.log(person.firstName, person.lastName);

//task 4
var schoolThings = ['books', 'pencils'];
var homeThings = ['bed', 'couch'];
var things = [...schoolThings, ...homeThings];
console.log(things);

//task 5
function getArea(length, width) {
    return (length * width);
}
console.log(getArea(4,5));

//task 6