//Qs4.Write a function called doubleAndReturnArgs which accepts an array
//and a variable number of arguments.The function should return a new array with the
//original array values and all of the additional arguments doubled.

function doubleAndReturnArgs(arr, ...args) {
    const doubledArgs = args.map(arg => arg * 2);
    return [...arr, ...doubledArgs];
}

// Original array
const originalArray = [1, 2, 3];

// Call the function with the original array and additional arguments
const result = doubleAndReturnArgs(originalArray, 4, 5, 6);

// Output the result
console.log(result);
