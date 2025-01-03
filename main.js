let num1; // type number
let op; // type string
let num2; // type number
let currResult; // type number
let content = "0"; // type string
let display = document.querySelector(".display");

// ##### DO NOT MODIFY #####
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, op) {
    if (op == "+") {
        return add(num1, num2);
    } else if (op == "-") {
        return subtract(num1, num2);
    } else if (op == "x") {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}
// ##### -------------- #####

function addDigit(event) {
    let btn = event.target;
    if (content === "0") {
        content = btn.textContent;
    } else {
        content += btn.textContent;
    }
    display.textContent = content;
}

function addOp(event) {
    if (op == null) {
        if (content === "" && currResult !== null) {
            content = String(currResult);
        }
        let btn = event.target;
        num1 = Number(content);
        op = btn.textContent;
        content += ` ${op} `;
        display.textContent = content;
    }
}

function computeResult(event) {
    if (op == null) {
    } else if (content.split(op)[1] === " ") {
        error();
    } else {
        num2 = Number(content.split(op)[1]);
        let result = operate(num1, num2, op);
        if (result === NaN) {
            error();
        } else {
            num1 = null;
            op = null;
            num2 = null;
            currResult = result;
            content = String(content);
            display.textContent = content;
        }
    }
}

function error() {
    num1 = null;
    op = null;
    num2 = null;
    currResult = null;
    content = "";
    display.textContent = "Error";
}

function reset() {
    num1 = null;
    op = null;
    num2 = null;
    currResult = null;
    content = "0";
    display.textContent = content;
}

let digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach((btn) => {
    btn.addEventListener("click", addDigit);
});
let opButtons = document.querySelectorAll(".op");
opButtons.forEach((btn) => {
    btn.addEventListener("click", addOp);
});

let equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", computeResult);

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", reset);
