let buttons = document.querySelectorAll(".numbers");
let equation = document.querySelector(".equation");
let clear = document.querySelector(".clear");
let back = document.querySelector(".back");
let equals = document.querySelector(".equals");
let decimal = document.querySelector(".decimal");
let functionBtn = document.querySelectorAll(".function");

let previousKeyType = "";
let operator = "";
let a = 0;
let b = 0;

clear.addEventListener("click", () => {
    equation.textContent = "0";
    previousKeyType = "";
    a = 0;
    b = 0;
    operator = "";
});

back.addEventListener("click", () => {
    let temp = equation.textContent;
    equation.textContent = temp.slice(0, -1);
});

equals.addEventListener("click", () => {
    previousKeyType="function";
    test();
    operator="";
});

function test(){
    b = +equation.textContent;
    let temp = operate(operator, a, b);
    if(temp.toString().length>14) {temp=temp.toExponential(2);}
    equation.textContent = temp;
    a = temp;
}

decimal.addEventListener("click", () => {
    if (equation.textContent == "0" || (equation.textContent.includes(".") && previousKeyType == "function")) { equation.textContent = "0."; }
    else if (equation.textContent.includes(".") && previousKeyType == "number") return;
    else { equation.textContent += "."; }
    previousKeyType = "number";
})

for (var i = 0; i < functionBtn.length; i++) {
    let btn = functionBtn[i];
    btn.addEventListener("click", () => {
        previousKeyType = "function";
        if(operator != "") {
            b = +equation.textContent;
            test();
            operator=btn.textContent;
        }
        else{
            a = +equation.textContent;
            operator = btn.textContent;
        }
    });
}

for (var i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.addEventListener("click", () => {
        if(equation.textContent.length == 14 && previousKeyType=="number") return;

        if (equation.textContent == "0" || previousKeyType == "function") { equation.textContent = btn.textContent; }
        else { equation.textContent += btn.textContent; }
        previousKeyType = "number";
    });
}

function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b == 0) return "ERROR";
    return a / b;
}
function exponen(a, b){
    return Math.pow(a, b);
}
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return substract(a, b);
            break;
        case '×':
            return multiply(a, b);
            break;
        case '÷':
            return divide(a, b);
            break;
        case 'ab':
            return exponen(a, b);
            break;
    }
}
