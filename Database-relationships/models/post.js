// one to squillions relationship

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

const usersch = new Schema({
  username: String,
  email: String,
});

const postSch = new Schema({
  title: String,
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", usersch);
const Post = mongoose.model("Post", postSch);

const adddata = async () => {
  let user1 = new User({
    username: "Rahul",
    email: "rahul@gmail.com",
  });

  let post1 = new Post({
    title: "new post",
    content: "Content1",
    user: user1._id,
  });

  post1.user = user1;

  await user1.save();
  await post1.save();
};

adddata();
