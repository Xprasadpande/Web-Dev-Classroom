//Destructuring 

let names = ["prasad", "radha", "paras", "shubham"];

let [winner, runnerup, ...others] = names;

//...is Rest variable which store remaining value paras and shubham

console.log();

// Destructuring in objects


const Student = { 
    name : "prasad",
    age : 19,
    class : 15,
    subjects : ["hindi", "urdu", "maths", "science"],
    username : "Prasadaz",
    password : "abc@123"
}
// 
let {username : user, password : secret} = Student;