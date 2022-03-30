/*const express = require("express");
const cors = require("cors");
const db = require('./models/index');
const app = express();
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});*/
const dbOperations = require('./controllers/flightController');
dbOperations.getFlights().then(result => {
    console.log(result);
})