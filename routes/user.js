const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "../home.html"));

  res.render("home", { names: ["aman", "raj", "neha"], isAdmin: false });
});

router.get("/about", (req, res) => {
  res.send("<h1>Welcome to  page by GET Method</h1>");
});

router.post("/about", (req, res) => {
  res.send("<h1>Welcome to  page by POST Method</h1>");
});

router.get("/form", (req, res) => {
  // res.sendFile(path.join(__dirname, "../form.html"));
  res.render("form", { isAdmin: false });
});

router.get("/api", (req, res) => {
  res.json({ name: "aman", age: 21 });
});

router.post("/savedata", (req, res) => {
  console.log(req.body);
  res.send("<h1>Thank you</h1>");
});

module.exports = router;
