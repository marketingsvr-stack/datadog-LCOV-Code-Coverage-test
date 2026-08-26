const {
    add,
    subtract,
    multiply,
    divide,
    isPositive,
    getDiscount
} = require("./calculator");

describe("Calculator Tests", () => {

    // Positive / normal cases
    test("adds two positive numbers", () => {
        expect(add(10, 5)).toBe(15);
    });

    test("subtracts two numbers", () => {
        expect(subtract(10, 5)).toBe(5);
    });

    test("multiplies two numbers", () => {
        expect(multiply(10, 5)).toBe(50);
    });

    test("divides two numbers", () => {
        expect(divide(10, 2)).toBe(5);
    });

    // Negative values
    test("adds negative numbers", () => {
        expect(add(-10, -5)).toBe(-15);
    });

    test("subtracts negative numbers", () => {
        expect(subtract(-10, -5)).toBe(-5);
    });

    // Zero values
    test("multiplies by zero", () => {
        expect(multiply(10, 0)).toBe(0);
    });

    // Decimal values
    test("adds decimal numbers", () => {
        expect(add(10.5, 2.5)).toBe(13);
    });

    // Positive condition
    test("identifies a positive number", () => {
        expect(isPositive(10)).toBe(true);
    });

    // Discount - highest tier
    test("applies 20 percent discount for amount >= 1000", () => {
        expect(getDiscount(1000)).toBe(200);
    });

    // Discount - middle tier
    test("applies 10 percent discount for amount between 500 and 999", () => {
        expect(getDiscount(750)).toBe(75);
    });

});