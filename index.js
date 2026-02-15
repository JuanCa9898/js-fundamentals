let firstname = "Juan";
let lastname = "Restrepo";
let age = 27;

let birthYear = 1998;
let currentYear = 2026;
let calculatedAge = currentYear - birthYear;

if (calculatedAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.")
}

let number = 7;

if (number % 2 == 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

console.log("My name is " + firstname + " " + lastname);
console.log("I am " + calculatedAge + " years old");