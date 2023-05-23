let numberOne;
let numberTwo;
let operator;

const display = document.querySelector('.display');

const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        switch(buttonValue) {
            case '=':
                display.textContent = eval(display.textContent);
                break;
            case 'C':
                display.textContent = '';
                break;
            case 'DEL':
                display.textContent = display.textContent.slice(0,-1);
                break;
            default:
                display.textContent += buttonValue;
        }
    })
})

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