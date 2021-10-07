const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome  express</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Welcome to  page by GET Method</h1>");
});

app.post("/about", (req, res) => {
  res.send("<h1>Welcome hello   page by POST method</h1>");
});

app.listen(3600, (req, res) => {
  console.log("Server Running on 3500");
});
