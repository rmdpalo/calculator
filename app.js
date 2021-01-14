alert("linked");

let num1 = parseInt(prompt("Enter first number"));
let operator = prompt("enter an operator");
let num2 = parseInt(prompt("enter the second number"));

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, num2, operator){
    if(operator === '+'){
        return add(num1, num2);
    }else if(operator === '-'){
        return subtract(num1, num2);
    }else if(operator === '*'){
        return multiply(num1, num2);
    }else if(operator === '/'){
        return divide(num1, num2);
    }
}

// console.log(add(2, 2));
// console.log(subtract(2, 2));
// console.log(multiply(2, 2));
// console.log(divide(2, 2));

console.log(operate(num1, num2, operator))