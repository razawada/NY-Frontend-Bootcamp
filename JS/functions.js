const expression = function () {
    console.log("Hello! I am a function expression")
}


//with return value
function sum(a, b) {
    return a+b;
}

function localScope() {
    let localVar = "I am a local variable"
    console.log(globalVar);

}

console.log(globalVar);

console.log(newSum(2,3));

function newSum(a,b) {
    let 
}

//higher-order fucntion 
function calculate (operation, num1, num2) {
    return operation(num1, num2)
}

function addition(a, b) {
    return a+b;
}

function subtraction (a, b) {
    return a - b;
}

