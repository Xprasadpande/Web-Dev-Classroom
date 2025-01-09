// one to few relationships

// Code to create a user schema and model
const mongoose = require("mongoose"); // Import mongoose
const { Schema } = mongoose; // Destructure Schema from mongoose

main() // Function to connect to the database
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

async function main() {
  // Function to connect to the database
  await mongoose.connect("mongodb://127.0.0.1:27017/rel-demo");
}

// Create a user schema
const userSchema = new Schema({
  //
  username: String,
  addresses: [
    // Array of addresses
    {
      _id: false, // This will prevent mongoose from creating a separate _id for each address
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema); // Create a User model

const addUser = async () => {
  // Function to add a user to the database
  let user1 = new User({
    username: "John Doe",
    addresses: [
      { location: "123 Main St", city: "San Francisco" },
      { location: "456 Maple St", city: "San Jose" },
    ],
  });

  user1.addresses.push({ location: "789 Elm St", city: "Mountain View" }); // Add another address
  let result = await user1.save(); // Save the user to the database
  console.log(result); // Output the result
};

addUser(); // Call the addUser function
