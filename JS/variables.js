console.log("Hello World!");

//variables - store data values;

//var = global variable
if (true) {
    var name = "John";
}

console.log(name);


//const= fixed value
const birthday =  "June 23";
birthday = "July 1";
// birthday = "July 1" - will throw an error;

// let - blocks scoped variable;
if (true) {
    let x = 23;
    console.log(x);
}
//console.log(x) outside if statement will throw an error;

