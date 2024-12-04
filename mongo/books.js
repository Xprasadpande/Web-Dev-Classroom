const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 25,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction", "biography"],
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema); // collection form

// let book1 = new Book({
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   price: 19.99,
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Book.findByIdAndDelete("67385d1107d7c05e2b51e65f").then((res) => {
//   console.log(res);
// });
