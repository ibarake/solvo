const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.map((number) => {
   if (number % 2 === 0) {
       return number;
   }
});
console.log(evenNumbers);
