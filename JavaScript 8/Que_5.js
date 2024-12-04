//Write a function called mergeObjects that accepts two objects and 
//returns a new object which contains  all the keys and values of the 
//first object and second object. 

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

mergeObjects({a : 1, b : 2}, {c : 3, d : 4});

// Define two objects
const objectA = { a: 1, b: 2 };
const objectB = { b: 3, c: 4 };

// Call the mergeObjects function
const result = mergeObjects(objectA, objectB);

// Output the result
console.log(result);
