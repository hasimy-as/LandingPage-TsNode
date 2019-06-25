//dependencies & settings
import express from "express";
const app = express();
const port = 8080;
app.set("view engine", "ejs");
app.use(express.static("public"));

//render
app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, function() {
  console.log(`Port in localhost:${port}`);
});
