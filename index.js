const path = require("path");
const express = require("express");
const expressEdge = require("express-edge");

const app = new express();

app.use(express.static("public"));
app.use(expressEdge.engine);

app.get("/", (req, res) => {
  res.render("index");
});

/*app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/login.html"));
});*/

app.get("/user", (req, res) => {
  res.render("user");
});

//app.get("/user/:id", userPageController);

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
