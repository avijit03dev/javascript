function greet() {
  console.log("Hello, Avijit!");
}

greet();


function greetUser(name) {
  console.log("Hello " + name + "!");
}

greetUser("Avijit");
greetUser("Shikha");

function add(a, b) {
  return a + b;
}

const result = add(10, 5);
console.log("Sum:", result);

function showMessage() {
  console.log("Welcome to JavaScript functions!");
}
showMessage();

function multiply(x, y, z) {
  console.log("Product:", x * y * z);
}
multiply(2, 3, 4);

function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet("Avijit");
greet();

function square(num) {
  return num * num;
}

console.log("Square of 5:", square(5));


function addNumbers(a, b) {
  return a + b;
}

let sum = addNumbers(7, 3);
console.log("Result:", sum);


function outer() {
  console.log("Outer function");

  function inner() {
    console.log("Inner function");
  }

  inner();
}

outer();

const sayHi = function() {
  console.log("Hi from function expression!");
};
sayHi();

const divide = function(a, b) {
  return a / b;
};
console.log("Division:", divide(10, 2));


// const add = (a, b) => a + b;
// console.log("Sum:", add(5, 3));

const greets = (name) => {
  console.log("Hello, " + name);
  console.log("Welcome!");
};
greets("Avijit");

setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

function outer() {
  return function inner() {
    console.log("Returned from inner function!");
  };
}

const func = outer();
func();


function printNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    console.log(i);
  }
}
printNumbers(5);


function checkAge(age) {
  if (age <= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log(checkAge(20));

function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Invalid operator";
  }
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "*"));


function getTotal(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}

console.log("Total:", getTotal([10, 20, 30, 40]));

const user = {
  name: "Avijit",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

user.greet();




