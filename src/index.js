// Packages
const express = require("express");
const app = express();

//middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//html
const {table} = require("./table.js")

app.get("/", (req, res) => {
  res.send(table);
});

//ROUTES
app.use(require("../routes/index.route.js"));

app.listen(3001);
console.log("Server running in: http://localhost:3001");
