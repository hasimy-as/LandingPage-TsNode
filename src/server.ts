//dependencies & settings
import express from "express";
const app = express();
const port = 8080;
app.set("view engine", "ejs");
app.use(express.static("public"));

//render
app.get("/", (req, res) => {
  res.write("Hello programmers!");
});

app.listen(port, () => {
  console.log(`Port in localhost:${port}`);
});
