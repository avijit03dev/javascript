const fruits = ["apple", "banana"];
fruits.push("mango"); //Add     
console.log(fruits);  

fruits.pop();            // Remove from end
console.log(fruits);

const colors = ["red", "green"];
colors.unshift("blue");  // Add at beginning
console.log(colors);     

colors.shift();          // Remove first element
console.log(colors);  

const arr1 = [1, 2];
const arr2 = [3, 4];
const result = arr1.concat(arr2);
console.log(result);    

const food = ["apple", "banana", "cherry"];
console.log(food.join(" - "));

const numbers = [10, 20, 30, 40, 50];
const sliced = numbers.slice(1, 4); 
console.log(sliced);     

numbers.splice(2, 1, 35);  // remove 1 item at index 2, add 35
console.log(numbers);      


const cities = ["Delhi", "Mumbai", "Kolkata"];
console.log(cities.indexOf("Mumbai")); 
console.log(cities.includes("Pune")); 

const nums = [1, 2, 3, 4];
const squares = nums.map(n => n * n);
console.log(squares); 

const ages = [12, 18, 25, 30, 40];
const adults = ages.filter(age => age >= 10);
console.log(adults); 

const prices = [100, 200, 300];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); 


const number = [5, 12, 8, 130, 44];
console.log(number.find(num => num > 10));      // 12
console.log(number.findIndex(num => num > 10)); // 1


const scores = [45, 50, 30, 90];
console.log(scores.some(s => s > 80));  
console.log(scores.every(s => s > 20)); 

const arr = [1, [2, 3], [4, [5]]];
console.log(arr.flat(2)); // [1, 2, 3, 4, 5]

const numbers2 = [1, 2, 3];
console.log(numbers2.flatMap(n => [n, n * 2]));

const names = ["Charlie", "Alice", "Bob"];
names.sort();
console.log(names); // ["Alice", "Bob", "Charlie"]

names.reverse();
console.log(names); // ["Charlie", "Bob", "Alice"]


const items = ["pen", "book", "bag"];
items.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});
// 1. pen
// 2. book
// 3. bag

const numbers3 = [1, 2, 3, 4, 5, 6];

const results = numbers3
  .filter(n => n % 2 === 0)  // [2, 4, 6]
  .map(n => n * 10)          // [20, 40, 60]
  .reduce((sum, n) => sum + n, 0); // 120

console.log(results);
