let num1;
let op;
let num2;
let display = document.querySelector(".display");
let displayContent = "0";

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
    if (num2 == 0) {
        if (num1 < 0) {
            return "-Infinity";
        } else if (num1 == 0) {
            return "Error";
        } else {
            return "Infinity";
        }
    } else {
        return num1 / num2;
    }
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

function addDigit(event) {
    let btn = event.target;
    if (displayContent === "0") {
        displayContent = btn.textContent;
    } else {
        displayContent += btn.textContent;
    }
    display.textContent = displayContent;
}

function addOp(event) {
    let btn = event.target;
    num1 = Number(displayContent);
    op = btn.textContent;
    displayContent = "";
    disableOps(); // disable the event listeners for operator buttons
}

function disableOps() {
    let opButtons = document.querySelectorAll(".op");
    opButtons.forEach((btn) => {
        btn.removeEventListener("click", addOp);
    });
}

let digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach((btn) => {
    btn.addEventListener("click", addDigit);
});
let opButtons = document.querySelectorAll(".op");
opButtons.forEach((btn) => {
    btn.addEventListener("click", addOp);
});
