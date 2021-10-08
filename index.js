const express = require("express");
const app = express();

const userRoutes = require("./routes/user");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", userRoutes);

app.listen(3600, (req, res) => {
  console.log("Server Running on 3600");
});
