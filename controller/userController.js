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
  res.send("<h1>Thank you</h1>")

};

exports.viewdata = async (req, res) => {
  const data = await User.find()
  console.log(data);
  res.render("viewdata", {data, isAdmin: false });
}

exports.singleuserdata = async (req, res) => {
  const id = req.params.id

  const data = await User.find({ _id: id });
  // console.log(data[0]);
   res.render("singleuser", { data : data[0], isAdmin: false });

}