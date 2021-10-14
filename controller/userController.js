const User = require('../models/user')


exports.home = (req, res) => {
  // res.sendFile(path.join(__dirname, "../home.html"));

  res.render("home", { names: ["aman", "raj", "neha"], isAdmin: true });
};


exports.about = (req, res) => {
  res.send("<h1>Welcome to  page by GET Method</h1>");
};

exports.form = (req, res) => {
  // res.sendFile(path.join(__dirname, "../form.html"));
  res.render("form", { isAdmin: false });
};

exports.api = (req, res) => {
  res.json({ name: "aman", age: 21 });
};

exports.savedata = async (req, res) => {
  // console.log(req.body);
  var data = {
    name: req.body.name,
    age: req.body.age,
    mobile:req.body.mobile
  }

  const result = await User(data).save()
  console.log(result);

};