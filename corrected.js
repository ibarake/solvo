const numbers = [1, 2, 3, 4, 5];
let evenNumbers;

// 1. Version 1 of a possible solution

evenNumbers = numbers.map((number) => {
   if (number % 2 === 0) {
       return number;
   }
}).filter(Boolean);
console.log("Version 1:", evenNumbers);

// 2. Version 2 of a possible solution

evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Version 2:", evenNumbers);

// 3. Version 3 of a possible solution
evenNumbers = [];
numbers.map((number) => {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
});
console.log("Version 3:", evenNumbers);
