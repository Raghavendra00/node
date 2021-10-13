const express = require("express");
const app = express();
const mongoose = require('mongoose')

const userRoutes = require("./routes/user");
require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false })); // For getting data from POST request in req.body(undefined otherwise)

app.use(express.static("public"));// For serving as it is to the browser without processing

app.set("view engine", "ejs");// Setting view engine as EJS(others PUG, Handlebars)
app.set("views", "views");// Setting views folder

app.use("/", userRoutes);

// if none route matches...like 404 page not found
app.use('*', (req, res) => {
  res.send('<h1>oops....Page  found</h1>')
})

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, (req, res) => {
      console.log(`Server Running on ${PORT}`);
    });
  })
  .catch((err) => {console.log(err);})


