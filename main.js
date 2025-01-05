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
    } else if (op === "-") {
        return subtract(num1, num2);
    } else if (op === "x") {
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
    let btn = event.target;
    if (op === "") {
        if (content === "") {
            if (num1 === null) {
                error();
                return;
            }
        } else {
            num1 = Number(content);
        }
        op = btn.textContent;
        content = "";
    } else {
        computeResult();
        op = btn.textContent;
    }
}

function addDecimal(event) {
    if (content === "") {
        content = "0.";
    } else if (!content.includes(".")) {
        content += ".";
    }
    display.textContent = content;
}

function changeSign(event) {
    if (content === "0") {
        return;
    }
    if (content === "") {
        if (num1 !== null && op === "") {
            num1 = -num1;
            display.textContent = String(num1);
        }
        return;
    }
    if (content.charAt(0) === "-") {
        content = content.substring(1); // remove the first character
    } else {
        content = "-" + content;
    }
    display.textContent = content;
}

function percent(event) {
    if (content === "") {
        if (num1 !== null && op === "") {
            num1 /= 100;
            display.textContent = String(num1);
        }
    } else {
        content = String(Number(content) / 100);
        display.textContent = content;
    }
}

function compute(event) {
    computeResult();
}

function computeResult() {
    if (op === "") {
    } else if (content === "") {
        error();
    } else {
        num2 = Number(content);
        let result = operate(num1, num2, op);
        num1 = result;
        op = "";
        num2 = null;
        content = "";
        display.textContent = String(result);
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
