let numberOne;
let numberTwo;
let operator;

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, numberOne, numberTwo){
    console.log(operator(numberOne,numberTwo));
}