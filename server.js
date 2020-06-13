const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const { Channel } = require('./models');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
   const channel = await Channel.create({"name": "sequelize"});
   console.log(channel)
  res.json({ message: "Iae man." });
});

require("./routes/channel.routes")(app);
require("./routes/medicines.routes")(app);
require("./routes/benefits.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
