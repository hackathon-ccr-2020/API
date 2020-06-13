const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const Friend = require('./models');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(Friend)
  res.json({ message: "Iae man." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
