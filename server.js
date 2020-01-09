const express = require("express");
const app = express();
const hbs = require("hbs");


let hour = new Date().getHours();

app.use(express.static(__dirname+"/public"))
app.set("view engine", hbs);


  if (hour < 8 || hour > 17) app.get("*", (req, res) => res.render("close.hbs"));
  else {
  app.get("/contact/:name", (req, res) => {
    res.render("contact.hbs", { name: req.params.name });
  });
 }

app.listen(4000, err => {
  if (err) console.log(" Our office is not open now");
  else console.log("Welcome to our office ");
});