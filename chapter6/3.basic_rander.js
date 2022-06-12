const express = require("express");
const exHandlebar = require("express-handlebars");

const app = express();
const port = 3000 || process.env.PORT;

app.engine("handlebars", exHandlebar.engine());
app.set("views", "./views");
app.set("view engine", "handlebars");

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("*", (req, res) => res.send(`<a href="/about">About</a>`));

app.listen(port, () => console.log(`http://localhost:${port}`));
