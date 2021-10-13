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

exports.savedata = (req, res) => {
    console.log(req.body);
    let email = req.body.email
    let password = req.body.password

    if (email == 'mail@gmail.com' && password == '12345') {
        res.send('<h1>Welcome</h1>')
    }
    else {
        res.send("<h1>Wrong credentials</h1>");

    }
};