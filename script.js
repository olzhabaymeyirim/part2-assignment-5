
"use strict";

// TASK 6: VARIABLES AND DATA TYPES

console.log("===== TASK 6: VARIABLES AND DATA TYPES =====");

const fullName = "Meyirim Olzhabay";
let age = 18;
const isStudent = true;
const favouriteColour = "Purple";

console.log("Full name:", fullName, "| Type:", typeof fullName);
console.log("Age:", age, "| Type:", typeof age);
console.log("Is student:", isStudent, "| Type:", typeof isStudent);
console.log("Favourite colour:", favouriteColour, "| Type:", typeof favouriteColour);

age = 19;
console.log("Updated age:", age);

console.log("Explanation: const is used for values that do not need reassignment.");


// TASK 7: INPUT AND A GREETING

console.log("===== TASK 7: INPUT AND A GREETING =====");

const userName = prompt("What is your name?");

if (userName !== null) {
    alert("Hello, " + userName + "! Welcome!");

    const group = "MT-2505";
    const greeting = `My name is ${userName}, and I am in group ${group}.`;

    console.log(greeting);
}


// TASK 8: SUM AND ARITHMETIC

console.log("===== TASK 8: SUM AND ARITHMETIC =====");

const firstInput = prompt("Enter the first number:");
const secondInput = prompt("Enter the second number:");

if (
    firstInput !== null &&
    secondInput !== null &&
    firstInput.trim() !== "" &&
    secondInput.trim() !== "" &&
    Number.isFinite(Number(firstInput)) &&
    Number.isFinite(Number(secondInput))
) {
    const firstNumber = Number(firstInput);
    const secondNumber = Number(secondInput);

    console.log("Sum:", firstNumber + secondNumber);
    console.log("Difference:", firstNumber - secondNumber);
    console.log("Product:", firstNumber * secondNumber);

    if (secondNumber !== 0) {
        console.log("Quotient:", firstNumber / secondNumber);
        console.log("Remainder:", firstNumber % secondNumber);
    } else {
        console.log("Division and remainder by zero are not allowed.");
    }

   console.log("String concatenation:", firstInput + secondInput);
   console.log("Number addition:", firstNumber + secondNumber);
} else {
    console.log("Invalid or cancelled input. Please try again.");
}


// TASK 9: STRINGS

console.log("===== TASK 9: STRINGS =====");

const nameString = "Meyirim Olzhabay";
const firstString = "I am learning";
const secondString = "JavaScript";

console.log("Full name:", nameString);
console.log("Length:", nameString.length);
console.log("Uppercase:", nameString.toUpperCase());
console.log("Lowercase:", nameString.toLowerCase());
console.log("First three characters:", nameString.slice(0, 3));
console.log("Combined sentence:", firstString + " " + secondString + ".");


// TASK 10: INCREMENT AND ASSIGNMENT OPERATORS

console.log("===== TASK 10: INCREMENT AND ASSIGNMENT OPERATORS =====");

let counter = 10;

console.log("Starting value:", counter);

counter++;
console.log("After ++:", counter);

counter--;
console.log("After --:", counter);

counter += 5;
console.log("After += 5:", counter);

counter -= 3;
console.log("After -= 3:", counter);

counter *= 2;
console.log("After *= 2:", counter);

counter /= 4;
console.log("After /= 4:", counter);


// TASK 11: DOG AGE CALCULATION

console.log("===== TASK 11: DOG AGE CALCULATION =====");

let dogAge = 2;
let humanAge = (dogAge - 2) * 4 + 21;

console.log(`A ${dogAge}-year-old dog is approximately ${humanAge} in human years.`);

dogAge = 5;
humanAge = (dogAge - 2) * 4 + 21;

console.log(`A ${dogAge}-year-old dog is approximately ${humanAge} in human years.`);


// TASK 12: FUNCTIONS

console.log("===== TASK 12: FUNCTIONS =====");

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

function calculateSum(a, b) {
    return a + b;
}

function calculateRectangleArea(width, height) {
    return width * height;
}

// Greeting function: two calls
greetUser("Meyirim");
greetUser("Sara");

// Sum function: two calls
console.log("Sum of 5 and 7:", calculateSum(5, 7));
console.log("Sum of 10 and 20:", calculateSum(10, 20));

// Rectangle area function: two calls
console.log("Rectangle area (4 x 6):", calculateRectangleArea(4, 6));
console.log("Rectangle area (5 x 8):", calculateRectangleArea(5, 8));

console.log("Parameters are variables in a function definition.");
console.log("Arguments are values passed to a function.");
console.log("return sends a result back to the caller.");

console.log("===== ALL TASKS COMPLETED =====");
