let num1;
let op;
let num2;

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
