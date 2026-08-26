function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}

function isPositive(number) {
    if (number > 0) {
        return true;
    }

    return false;
}

function getDiscount(amount) {
    if (amount >= 1000) {
        return amount * 0.20;
    } else if (amount >= 500) {
        return amount * 0.10;
    }

    return 0;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    isPositive,
    getDiscount
};