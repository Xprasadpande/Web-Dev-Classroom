const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("you contacted root path");
});

app.get("/apple", (req, res) => {
  res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
  res.send("you contacted orange path");
});

//custom response
// app.get("*", (req, res) => {
//   console.log("this path does not exist");
// });

app.post("/", (req, res) => {
  res.send("you sent a post request");
});

// path parameters

// app.get("/:username/:id", (req, res) => {
//   let { username, id } = req.params;
//   res.send(`Hello ${username} with id ${id}`);
//   let htmlStr = `<h1>welcome to the page of @${username} with id ${id}`;
//   res.send(htmlStr);
// });

//query string

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("<h1>nothing found</h1>");
  }
  res.send(`<h1>these are search results: ${q}</h1>`);
});

// app.use((req, res) => {
//   console.log("new incoming req!");
//   res.send({
//     name: "prasad",
//     age: 19,
//     about: "This is me",
//     msg: "FUCK OFF!!!",
//   });
// });
