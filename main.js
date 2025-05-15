let num1 = null; // type number
let op = ""; // type string
let num2 = null; // type number
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
    if (op === "+") {
        return add(num1, num2);
    } else if (op === "−" || op === "-") {
        return subtract(num1, num2);
    } else if (op === "×" || op === "*") {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}
// ##### -------------- #####

function addDigit(event) {
    let btn = event.target;
    addDigit_(btn.textContent);
}

function addDigit_(digit) {
    if (content === "0") {
        content = digit;
    } else {
        content += digit;
    }
    display.textContent = content;
    scrollRight();
}

function addOp(event) {
    let btn = event.target;
    addOp_(btn.textContent);
}

function addOp_(operator) {
    if (op === "") {
        if (content === "") {
            if (num1 === null) {
                error();
                return;
            }
        } else {
            num1 = Number(content);
        }
        op = operator;
        content = "";
    } else if (content === "") {
        op = operator;
    } else {
        computeResult();
        op = operator;
    }
}

function addDecimal() {
    if (content === "") {
        content = "0.";
    } else if (!content.includes(".")) {
        content += ".";
    }
    display.textContent = content;
    scrollRight();
}

function changeSign() {
    if (content === "0") {
        return;
    }
    if (content === "") {
        if (num1 !== null && op === "") {
            num1 = -num1;
            display.textContent = String(num1);
            scrollRight();
        }
        return;
    }
    if (content.charAt(0) === "-") {
        content = content.substring(1); // remove the first character
    } else {
        content = "-" + content;
    }
    display.textContent = content;
    scrollRight();
}

function percent() {
    if (content === "") {
        if (num1 !== null && op === "") {
            num1 /= 100;
            display.textContent = String(num1);
        }
    } else {
        content = String(Number(content) / 100);
        display.textContent = content;
    }
    scrollRight();
}

function compute() {
    computeResult();
}

function computeResult() {
    if (op === "") {
    } else if (content === "") {
        error();
    } else {
        num2 = Number(content);
        let result = operate(num1, num2, op);
        result = Math.round(result * 10 ** 4) / 10 ** 4;
        num1 = result;
        op = "";
        num2 = null;
        content = "";
        display.textContent = String(result);
        scrollRight();
    }
}

function error() {
    num1 = null;
    op = "";
    num2 = null;
    content = "";
    display.textContent = "Error";
}

function reset() {
    num1 = null;
    op = "";
    num2 = null;
    content = "0";
    display.textContent = content;
}

function scrollRight() {
    if (display.textContent.length > 10) {
        display.scrollLeft = display.scrollWidth;
    }
}

function setBorderWhite(event) {
    let btn = event.target;
    btn.style.borderColor = "white";
}

function setBorderBlack(event) {
    let btn = event.target;
    btn.style.borderColor = "black";
}

function keyboardInput(event) {
    let key = event.key;
    console.log(key);
    if (!isNaN(Number(key))) {
        addDigit_(key);
    } else if (key == ".") {
        addDecimal();
    } else if (key == "%") {
        percent();
    } else if (key == "Enter") {
        compute();
    } else if (["+", "-", "*", "/"].includes(key)) {
        addOp_(key);
    }
}

let digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach((btn) => {
    btn.addEventListener("click", addDigit);
});
let opButtons = document.querySelectorAll(".op");
opButtons.forEach((btn) => {
    btn.addEventListener("click", addOp);
});

let decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", addDecimal);

let signButton = document.querySelector(".sign");
signButton.addEventListener("click", changeSign);

let percentButton = document.querySelector(".percent");
percentButton.addEventListener("click", percent);

let equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", compute);

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", reset);

let allButtons = document.querySelectorAll("button");
allButtons.forEach((btn) => {
    btn.addEventListener("mousedown", setBorderWhite);
    btn.addEventListener("mouseup", setBorderBlack);
    btn.addEventListener("click", (event) => {
        // remove focus from the button after it is pressed
        event.target.blur();
    });
});

let body = document.querySelector("body");
body.addEventListener("keypress", keyboardInput);
