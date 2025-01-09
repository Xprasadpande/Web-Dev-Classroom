// one to may relationship

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

const orderSch = new Schema({
  // Schema for the order
  item: String,
  price: Number,
});

const custSch = new Schema({
  // Schema for the customer
  name: String,
  orders: [
    // Array of orders
    {
      type: Schema.Types.ObjectId, // Type of the order
      ref: "Order", // Reference to the order
    },
  ],
});

const Order = mongoose.model("Order", orderSch); // Model for the order
const Customer = mongoose.model("Customer", custSch); // Model for the customer

const addOrders = async () => {
  // Function to add orders
  let cust1 = new Customer({
    // Create a new customer
    name: "John Doe",
  });

  let order1 = await Order.findOne({ item: "Laptop" }); // Find the order with the item "Laptop"
  let order2 = await Order.findOne({ item: "Mobile" }); // Find the order with the item "Mobile"

  cust1.orders.push(order1); // Push the order1 to the orders array
  cust1.orders.push(order2); // Push the order2 to the orders array

  let res = await cust1.save(); // Save the customer
  console.log(res); // Log the result
};

addOrders(); // Call the function to add orders

// const addOrders = async () => {
//   let res = await Order.insertMany([
//     { item: "Laptop", price: 1000 },
//     { item: "Mobile", price: 500 },
//     { item: "Tablet", price: 300 },
//   ]);
//   console.log(res);
// };

// addOrders();
