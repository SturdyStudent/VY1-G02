const express = require("express");
const body_parser = require("body-parser");
const app = express();
const flightRoute = require('./routes/flightRoute')
//middleware
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));

//intro
app.get("/", (req, res, next) => {
    res.send("<h1>Welcome to Node js</h1>")
})
//api flight
app.use("/api/flights", flightRoute);
//error API
app.get("*", (req, res, next) => {
    res.send("Api not exists");
})
module.exports = app;