// Create a new array whose elements are in 
// uppercase of words present in the original array.

// Original array of words
const wordsArray = ['apple', 'banana', 'cherry', 'date'];

// Create a new array with all elements in uppercase
const uppercaseArray = wordsArray.map(word => word.toUpperCase());

// Output the new array
console.log(uppercaseArray);

//the output is ['APPLE', 'BANANA', 'CHERRY', 'DATE']
