const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// User.deleteMany({ age: { $gt: 10 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

User.find({})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// const Employee = mongoose.model("Employee", userSchema);

// const user2 = new User({
//   name: "eve Doe",
//   email: "evedoe@example.com",
//   age: 30,
// });

// user2
//   .save()
//   .then ((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);

User.insertMany([
  { name: "prasad", email: "prasad@gmail.com", age: 50 },
  { name: "shubham", email: "shubham@gmail.com", age: 90 },
  { name: "julian", email: "julian@gmail.com", age: 23 },
]).then((data) => {
  console.log(data);
});
