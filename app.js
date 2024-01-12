const express = require("express");
const router = require("./routes/index");
const app = express();
const port = 3001;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
