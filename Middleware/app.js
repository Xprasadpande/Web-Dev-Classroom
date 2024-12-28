const express = require("express");
const app = express();
let port = 8080;

// Middleware

// app.use((res, req, next) => {
//   console.log("This is a middleware function");
//   next();
// });

// app.use((res, req, next) => {
//   console.log("This is a 2nd middleware function");
//   next();
// });

// app.use((req, res, next) => {
//   console.log(req.method, req.hostname, req.path );
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("HI i'm root");
// });

// app.get("/random", (req, res) => {
//   res.send("This is a random page");
// });

const cheackToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveacees") {
    next();
  }
  res.status(401).send("Unauthorized");
};

app.get("/api", cheackToken, (req, res) => {
  res.send("This is an API page");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
