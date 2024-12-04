const express = require("express");
const app = express();
const path = require("path");

let port = 8080;
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal });
});

app.get("/ig/:usernames", (req, res) => {
  let { usernames } = req.params;
  const instaData = require("./data.json");
  const data = instaData[usernames];
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
