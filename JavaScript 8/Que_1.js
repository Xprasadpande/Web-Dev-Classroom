// Q.1 Square and sum the array elements 
// using the arrow function and then find the average of the array

// Define the array
const arr = [1, 2, 3, 4, 5];

// Step 1: Square the elements and calculate the sum
const sumOfSquares = arr.map(x => x * x).reduce((acc, curr) => acc + curr, 0);

// Step 2: Find the average
const average = sumOfSquares / arr.length;

// Output the result
console.log(`The sum of squares is: ${sumOfSquares}`);
console.log(`The average of the squares is: ${average}`);
