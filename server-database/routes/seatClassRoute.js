const partnerController = require('../controllers/partnerController');
const express = require("express");

const route = express.Router();

route.get("/",(req, res)=>{
    seatClassController.getLocations().then(result => {
        res.send(result[0]);
    })
});

module.exports = route;
