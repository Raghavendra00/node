const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../home.html"));
});

router.get("/about", (req, res) => {
  res.send("<h1>Welcome to  page by GET Method</h1>");
});

router.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "../form.html"));
});

router.get("/about/contactus", (req, res) => {
  res.send(
    "<h1>Welcome to  page by GET Method and also in contact us page</h1>"
  );
});

router.get("/api", (req, res) => {
  res.json({ name: "aman", age: 21 });
});

router.post("/savedata", (req, res) => {
  console.log(req.body);
  res.send("<h1>Thank you</h1>");
});

module.exports = router;
