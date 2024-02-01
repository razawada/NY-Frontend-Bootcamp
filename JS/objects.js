// Objects

const person = {
    firstName: 'Jane',
    lastName :'Doe',
    age: 25,
    hobbies: ['reading', 'coding', 'hiking'],

    greet: function () {
        console.log('Hello, my name is', this.firstName, 'Nice to meet you.')
    }
}

//accessing object properties
console.log(person.lastName);
console.log(peerson.age);

//modifying object 

//accessing object methods
person.greet();

//adding 

//nesting objects
//const address {
//    street: '123 Main St',
//    city: 'New York',
//    country: 'USA',
//}