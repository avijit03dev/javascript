for (let i = 1; i <= 5; i++) {
  console.log("Step:", i);
}

for (let i = 2; i <= 10; i += 2) {
  console.log("Even:", i);
}

const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}:`, fruits[i]);
}


let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}


let num = 5;
while (num > 0) {
  console.log("Countdown:", num);
  num--;
}

let i = 1;
do {
  console.log("Do While:", i);
  i++;
} while (i <= 3);

const cars = ["BMW", "Audi", "Tesla"];

for (const car of cars) {
  console.log("Car:", car);
}

const name = "Avijit";

for (const letter of name) {
  console.log(letter);
}


const person = {
  name: "Avijit",
  age: 22,
  city: "Kolkata"
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}


for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

for (let i = 1; i <= 4; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

