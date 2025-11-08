const myName = "Avijit";
const myAge = 25;

console.log(`My name is ${myName} and I am ${myAge} years old.`);

function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5)); // 10

// Array destructuring
const fruits = ["Apple", "Banana", "Mango"];
const [first, second] = fruits;
console.log(first);  // Apple

// Object destructuring
const users = { name: "Avijit", age: 22 };
const { name, age } = users;
console.log(name, age);

const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums); // [1,2,3,4,5]

const user = { name: "Avijit", age: 22 };
const updated = { ...user, city: "Kolkata" };
console.log(updated);

function sum(...numbers) {
    return numbers.reduce((a, b) => a * b);
}
console.log(sum(1, 2, 3, 4));

const getData = new Promise((resolve, reject) => {
    let success = true;
    success ? resolve("Data fetched") : reject("Error");
});

getData
    .then((result) => console.log(result))
    .catch((error) => console.log(error));


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const userss = new Person("Avijit", 22);
userss.greet();

const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// Map
const map = new Map();
map.set("name", "Avijit");
console.log(map.get("name"));

// Set
const set = new Set([1, 2, 3, 3]);
console.log(set); // {1, 2, 3}




