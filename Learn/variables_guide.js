// ============================================
// JAVASCRIPT VARIABLES - COMPLETE GUIDE
// ============================================

// ============================================
// 1. VAR - The Old Way (Function-Scoped)
// ============================================
// Introduction: 'var' was the original way to declare variables in JavaScript.
// It has function scope (or global scope if declared outside a function).
// Drawbacks: Can be re-declared, hoisted, and doesn't respect block scope.

var userName = "John Doe";
var userAge = 25;
var isActive = true;
console.log("User:", userName, "Age:", userAge, "Active:", isActive);

// Var is function-scoped, not block-scoped
function varExample() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log('Inside block:', x)
    }
    console.log('Outside block', x)
}
varExample()

// ============================================
// 2. LET - Modern Block-Scoped Variables
// ============================================
// Introduction: 'let' was introduced in ES6 (2015) for block-scoped variables.
// It respects block scope (if, for, while blocks) and cannot be re-declared.
// Best for: Variables that will change their value.

let productName = "Laptop";
let productPrice = 999.99;
let inStock = true;
console.log("Product:", productName, "Price: $" + productPrice, "In Stock:", inStock);

// Let respects block scope
function letExample() {
    let y = 10;
    if (true) {
        let y = 20; // Different variable!
        console.log("Inside block:", y); // 20
    }
    console.log("Outside block:", y); // 10
}
letExample();

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("Let loop:", i), 100);
}

// ============================================
// 3. CONST - Constants (Immutable Binding)
// ============================================
// Introduction: 'const' creates block-scoped constants.
// The binding cannot be reassigned, but objects/arrays can be modified.
// Best for: Values that shouldn't be reassigned.

const API_KEY = "abc123xyz";
const MAX_USERS = 100;
const PI = 3.14159;

console.log("API Key:", API_KEY, "Max Users:", MAX_USERS, "PI:", PI);

// Const with objects (object content can change)
const user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

user.age = 31;
console.log("Modified user:", user);


// Const with arrays
const colors = ["red", "green", "blue"];
colors.push("yellow");
console.log("Colors:", colors);
// colors = []; // ERROR! Cannot reassign const


// ============================================
// 4. MULTIPLE VARIABLE DECLARATIONS
// ============================================

console.log("\n=== Multiple Variables ===");

// Method 1: Single line with var
var a = 1, b = 2, c = 3;
console.log("Var multiple:", a, b, c);

// Method 2: Single line with let
let firstName = "Emma", lastName = "Watson", age = 33;
console.log("Let multiple:", firstName, lastName, age);

// Method 3: Single line with const
const WIDTH = 1920, HEIGHT = 1080, ASPECT_RATIO = 16 / 9;
console.log("Const multiple:", WIDTH, HEIGHT, ASPECT_RATIO);

// Method 4: Multiple lines (cleaner)
let city = "New York",
    country = "USA",
    population = 8000000;
console.log("City info:", city, country, population);

// Method 5: Destructuring assignment
let [x, y, z] = [10, 20, 30];
console.log("Destructured:", x, y, z);

// Method 6: Object destructuring
const settings = { theme: "dark", language: "en", notifications: true };
const { theme, language, notifications } = settings;
console.log("Settings:", theme, language, notifications);

// ============================================
// 5. DATA TYPES WITH VARIABLES
// ============================================

console.log("\n=== Data Types ===");

// String
let greeting = "Hello, World!";
let template = `Welcome ${userName}!`;

// Number
let integer = 42;
let decimal = 3.14;
let negative = -10;

// Boolean
let isLoggedIn = true;
let hasPermission = false;

// Null
let emptyValue = null;

// Undefined
let notDefined;

// Object
let person = {
    name: "Bob",
    age: 45,
    hobbies: ["reading", "coding"]
};

// Array
let fruits = ["apple", "banana", "orange"];

// Function
const greet = function (name) {
    return `Hello, ${name}!`;
};

console.log("String:", greeting);
console.log("Template:", template);
console.log("Number:", integer, decimal, negative);
console.log("Boolean:", isLoggedIn, hasPermission);
console.log("Null:", emptyValue);
console.log("Undefined:", notDefined);
console.log("Object:", person);
console.log("Array:", fruits);
console.log("Function result:", greet("Developer"));

// ============================================
// 6. BEST PRACTICES
// ============================================

console.log("\n=== Best Practices ===");

// 1. Use const by default
const APP_NAME = "MyApp";

// 2. Use let only if the value will change
let counter = 0;
counter++;

// 3. Avoid var in modern JavaScript
// var oldStyle = "avoid this"; // Don't use

// 4. Use meaningful names
const userAccountBalance = 1000; // Good
// const uab = 1000; // Bad

// 5. Use UPPER_CASE for constants
const DATABASE_URL = "https://api.example.com";

// 6. Use camelCase for variables
let totalPrice = 99.99;
let shippingAddress = "123 Main St";

console.log("Best practices applied successfully!");


// ============================================
// 7. SCOPE COMPARISON
// ============================================

console.log("\n=== Scope Comparison ===");

// Global scope
var globalVar = "I'm global (var)";
let globalLet = "I'm global (let)";
const globalConst = "I'm global (const)";

function scopeTest() {
    // Function scope
    var functionVar = "I'm function-scoped";
    let functionLet = "I'm function-scoped";
    const functionConst = "I'm function-scoped";

    if (true) {
        // Block scope
        var blockVar = "Var ignores block scope";
        let blockLet = "Let respects block scope";
        const blockConst = "Const respects block scope";

        console.log("Inside block - var:", blockVar);
        console.log("Inside block - let:", blockLet);
        console.log("Inside block - const:", blockConst);
    }
    console.log("Outside block - var:", blockVar);
}

scopeTest();

console.log("\n=== Examples Complete ===");